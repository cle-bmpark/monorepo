import { CreatePcProgramInput } from '@/pc-program/dto/create-pc-program.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePcProgramInput extends PartialType(CreatePcProgramInput) {
  @Field(() => Int)
  id: number;
}
