import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateStorageStatusInput } from './create-storage_status.input';

@InputType()
export class UpdateStorageStatusInput extends PartialType(CreateStorageStatusInput) {
  @Field(() => Int)
  id: number;
}
