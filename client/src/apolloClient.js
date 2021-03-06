import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const wsLink = new WebSocketLink({
  uri: `ws://192.168.43.166:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: wsLink,
});

export default client;
