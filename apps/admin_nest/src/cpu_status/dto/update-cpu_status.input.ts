import { CreateCpuStatusInput } from '@/cpu_status/dto/create-cpu_status.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCpuStatusInput extends PartialType(CreateCpuStatusInput) {
  @Field(() => Int)
  id: number;
}
