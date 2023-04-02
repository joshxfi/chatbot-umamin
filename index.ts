import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema, Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class Hello {
  @Field(() => String)
  message: string;
}

@Resolver(Hello)
class HelloResolver {
  @Query(() => Hello)
  hello() {
    return { message: "Hello world!" };
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

main();
