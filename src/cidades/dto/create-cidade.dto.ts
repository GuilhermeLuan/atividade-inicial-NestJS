import { IsString, isNumber } from 'class-validator';

export class CreateCidadeDto {
  @IsString()
  nome: string;

  uf_id: number;
}
