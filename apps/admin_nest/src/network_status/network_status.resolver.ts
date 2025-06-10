import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNetworkStatusInput } from './dto/create-network_status.input';
import { UpdateNetworkStatusInput } from './dto/update-network_status.input';
import { NetworkStatus } from './entities/network_status.entity';
import { NetworkStatusService } from './network_status.service';

@Resolver(() => NetworkStatus)
export class NetworkStatusResolver {
  constructor(private readonly networkStatusService: NetworkStatusService) {}

  @Mutation(() => NetworkStatus)
  createNetworkStatus(
    @Args('createNetworkStatusInput') createNetworkStatusInput: CreateNetworkStatusInput,
  ) {
    return this.networkStatusService.create(createNetworkStatusInput);
  }

  @Query(() => [NetworkStatus], { name: 'networkStatus' })
  findAll() {
    return this.networkStatusService.findAll();
  }

  @Query(() => NetworkStatus, { name: 'networkStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.networkStatusService.findOne(id);
  }

  @Mutation(() => NetworkStatus)
  updateNetworkStatus(
    @Args('updateNetworkStatusInput') updateNetworkStatusInput: UpdateNetworkStatusInput,
  ) {
    return this.networkStatusService.update(updateNetworkStatusInput.id, updateNetworkStatusInput);
  }

  @Mutation(() => NetworkStatus)
  removeNetworkStatus(@Args('id', { type: () => Int }) id: number) {
    return this.networkStatusService.remove(id);
  }
}
