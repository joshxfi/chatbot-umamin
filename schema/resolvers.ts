import { Query, Resolver } from "type-graphql";
import { Hello } from "./types";

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello)
  hello() {
    return { message: "Hello world!" };
  }
}
