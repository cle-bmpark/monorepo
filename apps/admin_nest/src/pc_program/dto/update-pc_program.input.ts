import { CreatePcProgramInput } from '@/pc_program/dto/create-pc_program.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePcProgramInput extends PartialType(CreatePcProgramInput) {
  @Field(() => Int)
  id: number;
}
