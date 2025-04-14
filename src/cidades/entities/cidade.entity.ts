import { Estudante } from 'src/estudante/entities/estudante.entity';
import { Uf } from 'src/uf/entities/uf.entitiy';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cidades')
export class Cidade {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column()
    nome: string;
    
    @ManyToOne(() => Uf, uf => uf.cidades)
    uf: Uf;

    @OneToMany(() => Estudante, estudante => estudante.cidade)
    estudantes: Estudante[];
}
