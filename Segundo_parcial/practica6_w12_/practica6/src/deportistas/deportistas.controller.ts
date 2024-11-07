import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeportistasService } from './deportistas.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Controller('deportistas')
export class DeportistasController {
  constructor(private readonly deportistasService: DeportistasService) {}

  @Post()
  create(@Body() createDeportistaDto: CreateDeportistaDto) {
    return this.deportistasService.create(createDeportistaDto);
  }

  @Get()
  findAll() {
    return this.deportistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deportistasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeportistaDto: UpdateDeportistaDto) {
    return this.deportistasService.update(+id, updateDeportistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deportistasService.remove(+id);
  }
}
