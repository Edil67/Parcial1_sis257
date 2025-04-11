
import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePersonaDto {
  @IsNotEmpty({ message: 'El campo ci no debe ser vacío' })
  @IsString({ message: 'El campo ci debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo ci no debe ser mayor a 20 caracteres' })
  readonly ci: string;

  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe ser mayor a 50 caracteres',
  })
  readonly nombre: string;

  @IsString({ message: 'El campo primer_Apellido debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo primer_Apellido no debe ser mayor a 50 caracteres',
  })
  readonly primer_Apellido: string;

  @IsString({ message: 'El campo segundo_Apellido debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo segundo_Apellido no debe ser mayor a 50 caracteres',
  })
  readonly segundo_Apellido: string;

  @IsDateString({}, { message: 'El campo fecha_Nacimiento debe ser una fecha válida' })
  readonly fecha_Nacimiento: Date;
  
}
