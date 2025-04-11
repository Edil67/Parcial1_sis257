import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column('varchar', { length: 20 })
  ci: string;
  @Column('varchar', { length: 50 })
  nombre: string;
  @Column('varchar', { length: 50 })
  primer_Apellido: string;
  @Column('varchar', { length: 50 })
  segundo_Apellido: string;
  @Column('date', { nullable: true })
  fecha_Nacimiento: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @OneToMany(() => Persona, (persona) => persona.id)
  personas: Persona[];
}
