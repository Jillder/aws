import { CreateReservaDto, ReservaDatasource, ReservaEntity, ReservaRepository, UpdateReservaDto } from "../../domain";

export class ReservaRepositoryImpl implements ReservaRepository {

  constructor(
    private readonly datasource: ReservaDatasource,
  ) {}
    findByDeportistaId(deportistaId: number): Promise<ReservaEntity[]> {
        throw new Error("Method not implemented.");
    }
    findByCanchaId(canchaId: number): Promise<ReservaEntity[]> {
        throw new Error("Method not implemented.");
    }

  async create(createReservaDto: CreateReservaDto): Promise<ReservaEntity> {
    return this.datasource.create(createReservaDto);
  }

  async getAll(): Promise<ReservaEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<ReservaEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateReservaDto: UpdateReservaDto): Promise<ReservaEntity> {
    return this.datasource.updateById(updateReservaDto);
  }

  async deleteById(id: number): Promise<ReservaEntity> {
    return this.datasource.deleteById(id);
  }
}
