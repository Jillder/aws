import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';  // Si usas NestJS
import { ReservaEntity } from '../../domain/entities/reserva.entity';
import { CreateReservaDto, UpdateReservaDto } from '../../domain/dtos';
import { reserva } from '../../entity_typeorm/reserva';  // La entidad Reserva de TypeORM
import { CanchaEntity } from '../../domain/entities/cancha.entity';  // Entidad de Cancha
import { DeportistaEntity } from '../../domain/entities/deportista.entity';  // Entidad de Deportista
import { ReservaDatasource } from '../../domain';

export class ReservaDatasourceImpl implements ReservaDatasource {
  
  constructor(
    @InjectRepository(reserva) 
    private readonly reservaRepository: Repository<reserva>,  // Repositorio de la entidad reserva
    @InjectRepository(CanchaEntity) 
    private readonly canchaRepository: Repository<CanchaEntity>,  // Repositorio de Cancha
    @InjectRepository(DeportistaEntity) 
    private readonly deportistaRepository: Repository<DeportistaEntity>  // Repositorio de Deportista
  ) {}

  // Crear una nueva reserva
  async create(createReservaDto: CreateReservaDto): Promise<ReservaEntity> {
    const cancha = await this.canchaRepository.findOne({ where: { id: createReservaDto.canchaId } });
    if (!cancha) throw 'Cancha not found';

    const deportistas = await this.deportistaRepository.findByIds(createReservaDto.deportistaIds);
    if (!deportistas || deportistas.length === 0) throw 'Deportistas not found';

    const reserva = this.reservaRepository.create({
      fecha: createReservaDto.fecha,
      hora_desde: createReservaDto.horaDesde,
      hora_hasta: createReservaDto.horaHasta,
      cancha: cancha,
      deportistas: deportistas
    });

    await this.reservaRepository.save(reserva);
    return ReservaEntity.fromObject(reserva);
  }

  // Obtener todas las reservas
  async getAll(): Promise<ReservaEntity[]> {
    try {
      const reservas = await this.reservaRepository.find({
        relations: ['cancha', 'deportistas'],  // Incluir las relaciones de cancha y deportistas
      });
      return reservas.map(reserva => ReservaEntity.fromObject(reserva));
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las reservas');
    }
  }

  // Buscar una reserva por ID
  async findById(id: number): Promise<ReservaEntity> {
    const reserva = await this.reservaRepository.findOne({
      where: { id },
      relations: ['cancha', 'deportistas'],  // Incluir relaciones de cancha y deportistas
    });
    if (!reserva) throw `Reserva with id ${id} not found`;
    return ReservaEntity.fromObject(reserva);
  }

  // Actualizar una reserva por ID
  async updateById(updateReservaDto: UpdateReservaDto): Promise<ReservaEntity> {
    await this.findById(updateReservaDto.id);  // Verifica si existe la reserva

    const cancha = await this.canchaRepository.findOne({ where: { id: updateReservaDto.canchaId } });
    if (!cancha) throw 'Cancha not found';

    const deportistas = await this.deportistaRepository.findByIds(updateReservaDto.deportistaIds);
    if (!deportistas || deportistas.length === 0) throw 'Deportistas not found';

    const updatedReserva = await this.reservaRepository.save({
      id: updateReservaDto.id,  // El ID debe ser proporcionado
      fecha: updateReservaDto.fecha,
      horaDesde: updateReservaDto.horaDesde,
      horaHasta: updateReservaDto.horaHasta,
      cancha: cancha,
      deportistas: deportistas
    });

    return ReservaEntity.fromObject(updatedReserva);
  }

  // Eliminar una reserva por ID
  async deleteById(id: number): Promise<ReservaEntity> {
    const reserva = await this.findById(id);  // Verifica que exista la reserva

    const deletedReserva = await this.reservaRepository.delete(id);  // Elimina la reserva de la base de datos
    return reserva;  // Devuelve el objeto de reserva eliminado
  }
}
