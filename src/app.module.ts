import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteModule } from './estudante/estudante.module';

@Module({
  imports: [EstudanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
