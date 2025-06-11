import { CreatePcDriverInput } from '@/pc_driver/dto/create-pc_driver.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePcDriverInput extends PartialType(CreatePcDriverInput) {
  @Field(() => Int)
  id: number;
}
