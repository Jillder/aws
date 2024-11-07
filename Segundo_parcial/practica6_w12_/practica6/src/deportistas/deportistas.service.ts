import { Injectable } from '@nestjs/common';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeportistasService {

  constructor(
    @InjectRepository(Deportista)
    private deportistasRepository: Repository<Deportista>,
  ) {}

  create(createDeportistaDto: CreateDeportistaDto) {
    const deportista = this.deportistasRepository.create(createDeportistaDto)
    return this.deportistasRepository.save(deportista)
  }

  findAll() {
    return this.deportistasRepository.find()
  }

  findOne(id: number) {
    return this.deportistasRepository.findOne({where: {id}})
  }

  update(id: number, updateDeportistaDto: UpdateDeportistaDto) {
    const deportista = this.deportistasRepository.create(updateDeportistaDto)
    return this.deportistasRepository.update(id, deportista)
  }

  remove(id: number) {
    return this.deportistasRepository.delete(id)
  }
}
