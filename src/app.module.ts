import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteModule } from './estudante/estudante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadesModule } from './cidades/cidades.module';
import { UfModule } from './uf/uf.module';
import { Cidade } from './cidades/entities/cidade.entity';
import { Uf } from './uf/entities/uf.entitiy';
import { Estudante } from './estudante/entities/estudante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Cidade, Uf, Estudante],
      synchronize: true,
    }),
    EstudanteModule,
    CidadesModule,
    UfModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
