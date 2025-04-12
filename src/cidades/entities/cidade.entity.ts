import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cidades')
export class Cidade {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column()
    nome: string;
    
    @Column()
    uf_id: string;
}
