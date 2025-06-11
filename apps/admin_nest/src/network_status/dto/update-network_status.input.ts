import { CreateNetworkStatusInput } from '@/network_status/dto/create-network_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNetworkStatusInput extends PartialType(CreateNetworkStatusInput) {
  @Field(() => Int)
  id: number;
}
