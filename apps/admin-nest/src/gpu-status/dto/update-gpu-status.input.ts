import { CreateGpuStatusInput } from '@/gpu-status/dto/create-gpu-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGpuStatusInput extends PartialType(CreateGpuStatusInput) {
  @Field(() => Int)
  id: number;
}
