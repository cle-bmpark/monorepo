import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePcInput } from './create-pc.input';

@InputType()
export class UpdatePcInput extends PartialType(CreatePcInput) {
  @Field(() => Int)
  id: number;
}
