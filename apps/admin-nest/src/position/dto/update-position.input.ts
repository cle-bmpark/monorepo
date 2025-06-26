import { CreatePositionInput } from '@/position/dto/create-position.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePositionInput extends PartialType(CreatePositionInput) {
  @Field(() => Int)
  id: number;
}
