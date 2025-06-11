import { CreateTempStatusInput } from '@/temp_status/dto/create-temp_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTempStatusInput extends PartialType(CreateTempStatusInput) {
  @Field(() => Int)
  id: number;
}
