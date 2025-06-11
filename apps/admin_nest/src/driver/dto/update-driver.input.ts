import { CreateDriverInput } from '@/driver/dto/create-driver.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDriverInput extends PartialType(CreateDriverInput) {
  @Field(() => Int)
  id: number;
}
