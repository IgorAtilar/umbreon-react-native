import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "http://SEU-ENDEREÇO-IPV4:4000/",
  cache: new InMemoryCache(),
});
