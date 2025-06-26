import { CreateProgramInput } from '@/program/dto/create-program.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramInput extends PartialType(CreateProgramInput) {
  @Field(() => Int)
  id: number;
}
