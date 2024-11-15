import { Injectable } from '@nestjs/common';
import { CreateDeportistaInput } from './dto/create-deportista.input';
import { UpdateDeportistaInput } from './dto/update-deportista.input';
import { Repository } from 'typeorm';
import { Deportista } from './entities/deportista.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
  ) {}

  async create(createDeportistaInput: CreateDeportistaInput): Promise<Deportista> {
    const deportista = this.deportistaRepository.create(createDeportistaInput);
    return await this.deportistaRepository.save(deportista);
  }

  async findAll(): Promise<Deportista[]> {
    return await this.deportistaRepository.find();
  }

  async findOne(id: number): Promise<Deportista> {
    const deportista = await this.deportistaRepository.findOneBy({ id });
    if (!deportista) {
      throw new Error(`Deportista con id ${id} no encontrado`);
    }
    return deportista;
  }

  async update(id: number, updateDeportistaInput: UpdateDeportistaInput): Promise<Deportista> {
    const deportista = await this.findOne(id);
    if (!deportista) {
      throw new Error(`Deportista con id ${id} no encontrado`);
    }
    Object.assign(deportista, updateDeportistaInput);
    return await this.deportistaRepository.save(deportista);
  }

  async remove(id: number): Promise<Deportista> {
    const deportista = await this.findOne(id);
    if (!deportista) {
      throw new Error(`Deportista con id ${id} no encontrado`);
    }
    await this.deportistaRepository.remove(deportista);
    return { ...deportista, id };
  }
}
