import { Injectable } from '@nestjs/common';
import { CreateCanchaInput } from './dto/create-cancha.input';
import { UpdateCanchaInput } from './dto/update-cancha.input';
import { Repository } from 'typeorm';
import { Cancha } from './entities/cancha.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CanchaService {
  constructor(
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>,
  ) {}

  async create(createCanchaInput: CreateCanchaInput): Promise<Cancha> {
    const cancha = this.canchaRepository.create(createCanchaInput);
    if (!cancha.descripcion) {
      throw new Error('La descripción es obligatoria');
    }
    return await this.canchaRepository.save(cancha);
  }
  

  async findAll(): Promise<Cancha[]> {
    return await this.canchaRepository.find();
  }

  async findOne(id: number): Promise<Cancha> {
    const cancha = await this.canchaRepository.findOneBy({ id });
    if (!cancha) {
      throw new Error(`Cancha con id ${id} no encontrada`);
    }
    return cancha;
  }

  async update(id: number, updateCanchaInput: UpdateCanchaInput): Promise<Cancha> {
    const cancha = await this.findOne(id);
    if (!cancha) {
      throw new Error(`Cancha con id ${id} no encontrada`);
    }
    Object.assign(cancha, updateCanchaInput);
    return await this.canchaRepository.save(cancha);
  }

  async remove(id: number): Promise<Cancha> {
    const cancha = await this.findOne(id);
    if (!cancha) {
      throw new Error(`Cancha con id ${id} no encontrada`);
    }
    await this.canchaRepository.remove(cancha);
    return { ...cancha, id };
  }
}
