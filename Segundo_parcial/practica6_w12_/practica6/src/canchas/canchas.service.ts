import { Injectable } from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancha } from './entities/cancha.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CanchasService {

  constructor(
    @InjectRepository(Cancha)
    private canchasRepository: Repository<Cancha>,
  ) {}

  create(createCanchaDto: CreateCanchaDto) {
    const cancha = this.canchasRepository.create(createCanchaDto)
    return this.canchasRepository.save(cancha)
  }

  findAll() {
    return this.canchasRepository.find()
  }

  findOne(id: number) {
    return this.canchasRepository.findOne({where: {id}})
  }

  update(id: number, updateCanchaDto: UpdateCanchaDto) {
    const cancha = this.canchasRepository.create(updateCanchaDto)
    return this.canchasRepository.update(id, cancha)
  }

  remove(id: number) {
    return this.canchasRepository.delete(id)
  }
}
