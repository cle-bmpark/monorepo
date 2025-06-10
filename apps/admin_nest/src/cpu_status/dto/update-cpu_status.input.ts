import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateCpuStatusInput } from './create-cpu_status.input';

@InputType()
export class UpdateCpuStatusInput extends PartialType(CreateCpuStatusInput) {
  @Field(() => Int)
  id: number;
}
