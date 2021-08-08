import { ApolloServer } from "apollo-server";

import { typeDefs, resolvers } from "./graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log(`Server failed: ${error}`));
