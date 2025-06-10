import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateProcessInput } from './create-process.input';

@InputType()
export class UpdateProcessInput extends PartialType(CreateProcessInput) {
  @Field(() => Int)
  id: number;
}
