import { CreateStorageStatusInput } from '@/storage_status/dto/create-storage_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStorageStatusInput extends PartialType(CreateStorageStatusInput) {
  @Field(() => Int)
  id: number;
}
