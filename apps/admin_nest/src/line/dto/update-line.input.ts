import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateLineInput } from './create-line.input';

@InputType()
export class UpdateLineInput extends PartialType(CreateLineInput) {
  @Field(() => Int)
  id: number;
}
