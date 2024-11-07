import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancha } from 'src/canchas/entities/cancha.entity';

@Injectable()
export class ReservasService {

  constructor(
    @InjectRepository(Reserva)
    private reservasRepository: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto) {
    const cancha = await this.reservasRepository.manager.findOne(Cancha, { where: { id: createReservaDto.canchaId } })
    if (!cancha) {
      throw new Error(`Cancha #${createReservaDto.canchaId} not found`);
    }
    const reserva = this.reservasRepository.create(createReservaDto)
    return this.reservasRepository.save(reserva)
  }

  async findAll() {
    return this.reservasRepository.find({relations: ['cancha', 'deportistas']})
  }

  async findOne(id: number) {
    const reserva = await this.reservasRepository.findOne({where: {id}, relations: ['cancha', 'deportistas']});
    if (!reserva) {
      throw new Error(`Reserva #${id} not found`);
    }
    return reserva;
  }

  async update(id: number, updateReservaDto: UpdateReservaDto) {
    const reserva = await this.reservasRepository.findOne({where: {id}});
    if (!reserva) {
      throw new Error(`Reserva #${id} not found`);
    }
    const updatedReserva = this.reservasRepository.merge(reserva, updateReservaDto);
    return this.reservasRepository.save(updatedReserva);
  }

  async remove(id: number) {
    const reserva = await this.reservasRepository.findOne({where: {id}});
    if (!reserva) {
      throw new Error(`Reserva #${id} not found`);
    }
    await this.reservasRepository.delete(id);
    return {message: `Reserva #${id} deleted`};
  }
}
