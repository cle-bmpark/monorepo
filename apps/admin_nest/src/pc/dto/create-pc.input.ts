import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePcInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
