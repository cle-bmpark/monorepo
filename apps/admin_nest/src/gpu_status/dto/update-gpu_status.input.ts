import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateGpuStatusInput } from './create-gpu_status.input';

@InputType()
export class UpdateGpuStatusInput extends PartialType(CreateGpuStatusInput) {
  @Field(() => Int)
  id: number;
}
