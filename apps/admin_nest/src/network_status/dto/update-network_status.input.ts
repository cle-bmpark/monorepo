import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateNetworkStatusInput } from './create-network_status.input';

@InputType()
export class UpdateNetworkStatusInput extends PartialType(CreateNetworkStatusInput) {
  @Field(() => Int)
  id: number;
}
