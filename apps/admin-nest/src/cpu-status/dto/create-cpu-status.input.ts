import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCpuStatusInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
