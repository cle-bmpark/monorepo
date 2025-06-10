import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProcessInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
