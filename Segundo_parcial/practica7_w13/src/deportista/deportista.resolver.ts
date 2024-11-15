import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeportistaService } from './deportista.service';
import { Deportista } from './entities/deportista.entity';
import { CreateDeportistaInput } from './dto/create-deportista.input';
import { UpdateDeportistaInput } from './dto/update-deportista.input';

@Resolver(() => Deportista)
export class DeportistaResolver {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Mutation(() => Deportista)
  createDeportista(@Args('createDeportistaInput') createDeportistaInput: CreateDeportistaInput) {
    return this.deportistaService.create(createDeportistaInput);
  }

  @Query(() => [Deportista], { name: 'deportistas' })
  findAll() {
    return this.deportistaService.findAll();
  }

  @Query(() => Deportista, { name: 'deportista' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deportistaService.findOne(id);
  }

  @Mutation(() => Deportista)
  updateDeportista(@Args('updateDeportistaInput') updateDeportistaInput: UpdateDeportistaInput) {
    return this.deportistaService.update(updateDeportistaInput.id, updateDeportistaInput);
  }

  @Mutation(() => Deportista)
  removeDeportista(@Args('id', { type: () => Int }) id: number) {
    return this.deportistaService.remove(id);
  }
}
