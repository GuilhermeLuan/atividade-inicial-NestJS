import { Injectable } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private readonly repository: Repository<Estudante>,
  ) {}

  create(dto: CreateEstudanteDto) {
    const estudante = this.repository.create(dto);
    return this.repository.save(estudante);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateEstudanteDto) {
    const estudanteToUpdate = await this.repository.findOneBy({ id });

    if (!estudanteToUpdate) return null;

    this.repository.merge(estudanteToUpdate, dto);
    return this.repository.save(estudanteToUpdate);
  }

  async remove(id: number) {
    const estudanteToUpdate = await this.repository.findOneBy({ id });
    if (!estudanteToUpdate) return null;
    return this.repository.remove(estudanteToUpdate);
  }
}
