import { CreateNetworkStatusInput } from '@/network_status/dto/create-network_status.input';
import { UpdateNetworkStatusInput } from '@/network_status/dto/update-network_status.input';
import { NetworkStatus } from '@/network_status/entities/network_status.entity';
import { NetworkStatusService } from '@/network_status/network_status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

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
