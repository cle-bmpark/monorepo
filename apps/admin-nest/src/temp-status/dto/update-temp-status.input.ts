import { CreateTempStatusInput } from '@/temp-status/dto/create-temp-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTempStatusInput extends PartialType(CreateTempStatusInput) {
  @Field(() => Int)
  id: number;
}
