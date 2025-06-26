import { CreatePcDriverInput } from '@/pc-driver/dto/create-pc-driver.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePcDriverInput extends PartialType(CreatePcDriverInput) {
  @Field(() => Int)
  id: number;
}
