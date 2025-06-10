import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateProgramInput } from './create-program.input';

@InputType()
export class UpdateProgramInput extends PartialType(CreateProgramInput) {
  @Field(() => Int)
  id: number;
}
