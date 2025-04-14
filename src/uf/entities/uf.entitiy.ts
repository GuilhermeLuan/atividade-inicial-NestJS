import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cidade } from '../../cidade/entities/cidade.entity';

@Entity()
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sigla: string;

  @OneToMany(() => Cidade, cidade => cidade.uf)
  cidades: Cidade[];
}
