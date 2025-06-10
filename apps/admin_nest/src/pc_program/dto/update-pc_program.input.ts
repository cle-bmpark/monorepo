import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePcProgramInput } from './create-pc_program.input';

@InputType()
export class UpdatePcProgramInput extends PartialType(CreatePcProgramInput) {
  @Field(() => Int)
  id: number;
}
