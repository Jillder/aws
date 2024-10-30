import { CreateCanchaDto, CanchaDatasource, CanchaEntity, CanchaRepository, UpdateCanchaDto } from "../../domain";

export class CanchaRepositoryImpl implements CanchaRepository {
  
  constructor(
    private readonly datasource: CanchaDatasource,
  ) {}

  async create(createCanchaDto: CreateCanchaDto): Promise<CanchaEntity> {
    return this.datasource.create(createCanchaDto);
  }

  async getAll(): Promise<CanchaEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<CanchaEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateCanchaDto: UpdateCanchaDto): Promise<CanchaEntity> {
    return this.datasource.updateById(updateCanchaDto);
  }

  async deleteById(id: number): Promise<CanchaEntity> {
    return this.datasource.deleteById(id);
  }
}
