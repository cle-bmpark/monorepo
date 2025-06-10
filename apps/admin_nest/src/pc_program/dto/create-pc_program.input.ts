import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePcProgramInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
