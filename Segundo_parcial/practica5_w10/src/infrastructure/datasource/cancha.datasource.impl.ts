import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';  // Si usas NestJS, esta es la forma de inyectar repositorios
import { CanchaEntity } from '../../domain/entities/cancha.entity';
import { CreateCanchaDto, UpdateCanchaDto } from '../../domain/dtos';
import { reserva } from "../../entity_typeorm/reserva";
import { CanchaDatasource } from '../../domain';

export class CanchaDatasourceImpl implements CanchaDatasource {
  constructor(
    @InjectRepository(CanchaEntity)
    private readonly canchaRepository: Repository<CanchaEntity>,  // Repository de CanchaEntity
  ) {}

  // Crear un nuevo cancha
  async create(createCanchaDto: CreateCanchaDto): Promise<CanchaEntity> {
    const cancha = this.canchaRepository.create(createCanchaDto);  // Crea un nuevo objeto CanchaEntity
    await this.canchaRepository.save(cancha);  // Guarda el objeto en la base de datos
    return CanchaEntity.fromObject(cancha);  // Devuelve el objeto convertido a CanchaEntity
  }

  // Obtener todas las canchas
  async getAll(): Promise<CanchaEntity[]> {
    try {
      const canchas = await this.canchaRepository.find();  // Encuentra todos los registros de canchas
      return canchas.map(cancha => CanchaEntity.fromObject(cancha));  // Convierte a CanchaEntity
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las canchas');
    }
  }

  // Encontrar una cancha por ID
  async findById(id: number): Promise<CanchaEntity> {
    const cancha = await this.canchaRepository.findOne({ where: { id } });  // Encuentra la cancha con el ID
    if (!cancha) throw `Cancha with id ${id} not found`;  // Si no se encuentra, lanza un error
    return CanchaEntity.fromObject(cancha);  // Convierte y devuelve la cancha
  }

  // Actualizar una cancha por ID
  async updateById(updateCanchaDto: UpdateCanchaDto): Promise<CanchaEntity> {
    await this.findById(updateCanchaDto.id);  // Verifica que la cancha exista
    const updatedCancha = await this.canchaRepository.save(updateCanchaDto);  // Actualiza la cancha
    return CanchaEntity.fromObject(updatedCancha);  // Devuelve la cancha actualizada
  }

  // Eliminar una cancha por ID
  async deleteById(id: number): Promise<CanchaEntity> {
    await this.findById(id);  // Verifica que la cancha exista
    const deletedCancha = await this.canchaRepository.delete(id);  // Elimina la cancha
    return CanchaEntity.fromObject(deletedCancha);  // Devuelve la cancha eliminada
  }
}
