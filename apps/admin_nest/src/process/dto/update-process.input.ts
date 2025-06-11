import { CreateProcessInput } from '@/process/dto/create-process.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProcessInput extends PartialType(CreateProcessInput) {
  @Field(() => Int)
  id: number;
}
