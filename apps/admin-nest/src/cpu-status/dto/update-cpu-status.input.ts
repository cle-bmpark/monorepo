import { CreateCpuStatusInput } from '@/cpu-status/dto/create-cpu-status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCpuStatusInput extends PartialType(CreateCpuStatusInput) {
  @Field(() => Int)
  id: number;
}
