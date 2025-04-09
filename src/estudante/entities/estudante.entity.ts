import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudantes')
export class Estudante {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  email: string;

  @Column()
  dt_nascimento: Date;
  // cidade_id: number;
}
