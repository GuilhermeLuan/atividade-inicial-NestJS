import { Cidade } from 'src/cidades/entities/cidade.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Cidade, cidade => cidade.estudantes)
  cidade: Cidade;
}
