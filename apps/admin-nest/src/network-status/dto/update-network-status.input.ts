import { CreateNetworkStatusInput } from '@/network-status/dto/create-network-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNetworkStatusInput extends PartialType(CreateNetworkStatusInput) {
  @Field(() => Int)
  id: number;
}
