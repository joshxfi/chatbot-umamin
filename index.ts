import "reflect-metadata";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";

import { HelloResolver } from "./schema/resolvers";

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
