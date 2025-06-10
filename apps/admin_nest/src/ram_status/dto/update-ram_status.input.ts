import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateRamStatusInput } from './create-ram_status.input';

@InputType()
export class UpdateRamStatusInput extends PartialType(CreateRamStatusInput) {
  @Field(() => Int)
  id: number;
}
