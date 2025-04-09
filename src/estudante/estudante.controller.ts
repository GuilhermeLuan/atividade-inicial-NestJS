/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EstudanteService } from './estudante.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';

@Controller('estudantes')
export class EstudanteController {
  constructor(private readonly estudanteService: EstudanteService) {}

  @Post()
  create(@Body() createEstudanteDto: CreateEstudanteDto) {
    return this.estudanteService.create(createEstudanteDto);
  }

  @Get()
  findAll() {
    return this.estudanteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const estudanteFound = await this.estudanteService.findOne(+id);
    if (!estudanteFound) throw new NotFoundException();
    return estudanteFound;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateEstudanteDto,
  ) {
    const estudanteToUpdate = await this.estudanteService.update(+id, dto);
    if (!estudanteToUpdate) throw new NotFoundException();
    return estudanteToUpdate;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const estudanteToUpdate = await this.estudanteService.remove(+id);
    if (!estudanteToUpdate) throw new NotFoundException();
  }
}
