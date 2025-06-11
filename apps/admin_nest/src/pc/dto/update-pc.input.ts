import { CreatePcInput } from '@/pc/dto/create-pc.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePcInput extends PartialType(CreatePcInput) {
  @Field(() => Int)
  id: number;
}
