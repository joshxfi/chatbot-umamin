import { Arg, Query, Resolver } from "type-graphql";
import openai from "../config/openai";
import { Chat } from "./types";

@Resolver()
export class ChatResolver {
  @Query(() => Chat)
  async getResponse(@Arg("prompt", () => String) prompt: string) {
    const _response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return { response: _response.data.choices[0].message.content };
  }
}
