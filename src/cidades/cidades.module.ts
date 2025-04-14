import { Module } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CidadesController } from './cidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './entities/cidade.entity';
import { UfModule } from 'src/uf/uf.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade]), UfModule],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {}
