import { CreateGpuStatusInput } from '@/gpu_status/dto/create-gpu_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGpuStatusInput extends PartialType(CreateGpuStatusInput) {
  @Field(() => Int)
  id: number;
}
