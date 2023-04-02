import { Query, Resolver } from "type-graphql";
import openai from "../config/openai";
import { Hello } from "./types";

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello)
  async hello() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });

    return { message: response.data.choices[0].text };
  }
}
