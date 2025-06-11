import { CreateRamStatusInput } from '@/ram_status/dto/create-ram_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRamStatusInput extends PartialType(CreateRamStatusInput) {
  @Field(() => Int)
  id: number;
}
