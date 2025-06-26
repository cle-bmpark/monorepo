import { CreateLineInput } from '@/line/dto/create-line.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLineInput extends PartialType(CreateLineInput) {
  @Field(() => Int)
  id: number;
}
