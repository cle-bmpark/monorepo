import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStorageStatusInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
