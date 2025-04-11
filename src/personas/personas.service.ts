import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';


@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona) private personasRepository: Repository<Persona>,
  ) {}
  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const existe = await this.personasRepository.findOneBy({
      ci: createPersonaDto.ci.trim(),
      nombre: createPersonaDto.nombre.trim(),
    });
    if (existe) throw new ConflictException('La persona ya existe');

    const persona = new Persona();
    persona.ci = createPersonaDto.ci.trim();
    persona.nombre = createPersonaDto.nombre.trim();
    return this.personasRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personasRepository.find({
      relations: { personas: true },
      select: {
        id: true,
        ci: true,
        nombre: true,
        personas: { id: true, nombre: true },
      },
    });
  }
  async findOne(id: number): Promise<Persona> {
    const persona = await this.personasRepository.findOne({ where: { id } });
    if (!persona) throw new NotFoundException('La persona no existe');
    return persona;
  }
  async update(
    id: number,
    updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
    const persona = await this.findOne(id);
    const personaUpdate = Object.assign(persona, updatePersonaDto);
    return this.personasRepository.save(personaUpdate);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    return this.personasRepository.softRemove(persona);
  }
}
