import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateGpuStatusInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
