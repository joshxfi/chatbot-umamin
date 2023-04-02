import "reflect-metadata";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";

import { ChatResolver } from "./schema/resolvers";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [ChatResolver],
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
