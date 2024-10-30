import { CreateDeportistaDto, DeportistaDatasource, DeportistaEntity, DeportistaRepository, UpdateDeportistaDto } from "../../domain";

export class DeportistaRepositoryImpl implements DeportistaRepository {

  constructor(
    private readonly datasource: DeportistaDatasource,
  ) {}

  async create(createDeportistaDto: CreateDeportistaDto): Promise<DeportistaEntity> {
    return this.datasource.create(createDeportistaDto);
  }

  async getAll(): Promise<DeportistaEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<DeportistaEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateDeportistaDto: UpdateDeportistaDto): Promise<DeportistaEntity> {
    return this.datasource.updateById(updateDeportistaDto);
  }

  async deleteById(id: number): Promise<DeportistaEntity> {
    return this.datasource.deleteById(id);
  }
}
