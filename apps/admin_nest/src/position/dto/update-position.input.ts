import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePositionInput } from './create-position.input';

@InputType()
export class UpdatePositionInput extends PartialType(CreatePositionInput) {
  @Field(() => Int)
  id: number;
}
