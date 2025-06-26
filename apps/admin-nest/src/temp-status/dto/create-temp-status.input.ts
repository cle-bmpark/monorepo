import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTempStatusInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
