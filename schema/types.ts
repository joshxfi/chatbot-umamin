import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Chat {
  @Field(() => String)
  response: string;
}
