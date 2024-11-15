import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeparacionCanchaService } from './separacioncancha.service';
import { SeparacionCancha } from './entities/separacioncancha.entity';
import { CreateSeparacionCanchaInput } from './dto/create-separacioncancha.input';
import { UpdateSeparacionCanchaInput } from './dto/update-separacioncancha.input';

@Resolver(() => SeparacionCancha)
export class SeparacioncanchaResolver {
  constructor(private readonly separacioncanchaService: SeparacionCanchaService) {}

  @Mutation(() => SeparacionCancha)
  createSeparacioncancha(@Args('createSeparacioncanchaInput') createSeparacioncanchaInput: CreateSeparacionCanchaInput) {
    return this.separacioncanchaService.create(createSeparacioncanchaInput);
  }

  @Query(() => [SeparacionCancha], { name: 'separacioncanchas' })
  findAll() {
    return this.separacioncanchaService.findAll();
  }

  @Query(() => SeparacionCancha, { name: 'separacioncancha' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.separacioncanchaService.findOne(id);
  }

  @Mutation(() => SeparacionCancha)
  updateSeparacioncancha(@Args('updateSeparacioncanchaInput') updateSeparacioncanchaInput: UpdateSeparacionCanchaInput) {
    return this.separacioncanchaService.update(updateSeparacioncanchaInput.id, updateSeparacioncanchaInput);
  }

  @Mutation(() => SeparacionCancha)
  removeSeparacioncancha(@Args('id', { type: () => Int }) id: number) {
    return this.separacioncanchaService.remove(id);
  }
}
