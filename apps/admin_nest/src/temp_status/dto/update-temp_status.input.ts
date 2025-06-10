import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateTempStatusInput } from './create-temp_status.input';

@InputType()
export class UpdateTempStatusInput extends PartialType(CreateTempStatusInput) {
  @Field(() => Int)
  id: number;
}
