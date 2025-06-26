import { CreateRamStatusInput } from '@/ram-status/dto/create-ram-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRamStatusInput extends PartialType(CreateRamStatusInput) {
  @Field(() => Int)
  id: number;
}
