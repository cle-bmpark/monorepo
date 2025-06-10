import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';
import { Driver } from './entities/driver.entity';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(private readonly driverService: DriverService) {}

  @Mutation(() => Driver)
  createDriver(@Args('createDriverInput') createDriverInput: CreateDriverInput) {
    return this.driverService.create(createDriverInput);
  }

  @Query(() => [Driver], { name: 'driver' })
  findAll() {
    return this.driverService.findAll();
  }

  @Query(() => Driver, { name: 'driver' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  @Mutation(() => Driver)
  updateDriver(@Args('updateDriverInput') updateDriverInput: UpdateDriverInput) {
    return this.driverService.update(updateDriverInput.id, updateDriverInput);
  }

  @Mutation(() => Driver)
  removeDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.remove(id);
  }
}
