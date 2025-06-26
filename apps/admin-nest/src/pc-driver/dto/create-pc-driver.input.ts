import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePcDriverInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
