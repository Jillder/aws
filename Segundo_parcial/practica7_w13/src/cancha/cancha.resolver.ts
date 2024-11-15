import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CanchaService } from './cancha.service';
import { Cancha } from './entities/cancha.entity';
import { CreateCanchaInput } from './dto/create-cancha.input';
import { UpdateCanchaInput } from './dto/update-cancha.input';

@Resolver(() => Cancha)
export class CanchaResolver {
  constructor(private readonly canchaService: CanchaService) {}

  @Mutation(() => Cancha)
  createCancha(@Args('createCanchaInput') createCanchaInput: CreateCanchaInput) {
    return this.canchaService.create(createCanchaInput);
  }

  @Query(() => [Cancha], { name: 'canchas' })
  findAll() {
    return this.canchaService.findAll();
  }

  @Query(() => Cancha, { name: 'cancha' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.canchaService.findOne(id);
  }

  @Mutation(() => Cancha)
  updateCancha(@Args('updateCanchaInput') updateCanchaInput: UpdateCanchaInput) {
    return this.canchaService.update(updateCanchaInput.id, updateCanchaInput);
  }

  @Mutation(() => Cancha)
  removeCancha(@Args('id', { type: () => Int }) id: number) {
    return this.canchaService.remove(id);
  }
}
