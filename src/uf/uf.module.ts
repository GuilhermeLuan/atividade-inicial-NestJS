import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UfService } from './uf.service';
import { UfController } from './uf.controller';
import { Uf } from './entities/uf.entitiy';


@Module({
  imports: [TypeOrmModule.forFeature([Uf])],
  controllers: [UfController],
  providers: [UfService],
  exports: [TypeOrmModule],	
})
export class UfModule {}
