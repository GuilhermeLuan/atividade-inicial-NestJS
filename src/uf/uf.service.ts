import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly ufRepository: Repository<Uf>,
  ) {}

  create(createUfDto: CreateUfDto) {
    const uf = this.ufRepository.create(createUfDto);
    return this.ufRepository.save(uf);
  }

  findAll() {
    return this.ufRepository.find({ relations: ['cidades'] });
  }

  findOne(id: number) {
    return this.ufRepository.findOne({
      where: { id },
      relations: ['cidades'],
    });
  }

  async update(id: number, updateUfDto: UpdateUfDto) {
    const uf = await this.ufRepository.findOneBy({ id });
    if (!uf) return null;

    this.ufRepository.merge(uf, updateUfDto);
    return this.ufRepository.save(uf);
  }

  async remove(id: number) {
    const uf = await this.ufRepository.findOneBy({ id });
    if (!uf) return null;

    return this.ufRepository.remove(uf);
  }
}
