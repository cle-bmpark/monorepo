import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePcDriverInput } from './create-pc_driver.input';

@InputType()
export class UpdatePcDriverInput extends PartialType(CreatePcDriverInput) {
  @Field(() => Int)
  id: number;
}
