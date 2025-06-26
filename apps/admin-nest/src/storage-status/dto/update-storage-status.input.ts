import { CreateStorageStatusInput } from '@/storage-status/dto/create-storage-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStorageStatusInput extends PartialType(CreateStorageStatusInput) {
  @Field(() => Int)
  id: number;
}
