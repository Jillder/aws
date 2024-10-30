import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';  // Si usas NestJS, esta es la forma de inyectar repositorios
import { DeportistaEntity } from '../../domain/entities/deportista.entity';
import { CreateDeportistaDto, UpdateDeportistaDto } from '../../domain/dtos';
import { reserva } from "../../entity_typeorm/reserva";
import { DeportistaDatasource } from '../../domain';

export class DeportistaDatasourceImpl implements DeportistaDatasource {
  constructor(
    @InjectRepository(DeportistaEntity)
    private readonly deportistaRepository: Repository<DeportistaEntity>,  // Repository de DeportistaEntity
  ) {}

  // Crear un nuevo deportista
  async create(createDeportistaDto: CreateDeportistaDto): Promise<DeportistaEntity> {
    const deportista = this.deportistaRepository.create(createDeportistaDto);  // Crea un nuevo objeto DeportistaEntity
    await this.deportistaRepository.save(deportista);  // Guarda el objeto en la base de datos
    return DeportistaEntity.fromObject(deportista);  // Devuelve el objeto convertido a DeportistaEntity
  }

  // Obtener todos los deportistas
  async getAll(): Promise<DeportistaEntity[]> {
    try {
      const deportistas = await this.deportistaRepository.find({ relations: ['reservas'] });  // Encuentra todos los registros de deportistas y sus reservas
      return deportistas.map(deportista => DeportistaEntity.fromObject(deportista));  // Convierte a DeportistaEntity
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener los deportistas');
    }
  }

  // Encontrar un deportista por ID
  async findById(id: number): Promise<DeportistaEntity> {
    const deportista = await this.deportistaRepository.findOne({ where: { id }, relations: ['reservas'] });  // Encuentra al deportista con el ID y sus reservas
    if (!deportista) throw `Deportista with id ${id} not found`;  // Si no se encuentra, lanza un error
    return DeportistaEntity.fromObject(deportista);  // Convierte y devuelve el deportista
  }

  // Actualizar un deportista por ID
  async updateById(updateDeportistaDto: UpdateDeportistaDto): Promise<DeportistaEntity> {
    await this.findById(updateDeportistaDto.id);  // Verifica que el deportista exista
    const updatedDeportista = await this.deportistaRepository.save(updateDeportistaDto);  // Actualiza el deportista
    return DeportistaEntity.fromObject(updatedDeportista);  // Devuelve el deportista actualizado
  }

  // Eliminar un deportista por ID
  async deleteById(id: number): Promise<DeportistaEntity> {
    await this.findById(id);  // Verifica que el deportista exista
    const deletedDeportista = await this.deportistaRepository.delete(id);  // Elimina el deportista
    return DeportistaEntity.fromObject(deletedDeportista);  // Devuelve el deportista eliminado
  }
}
