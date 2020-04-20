import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { CONFIG_QUERY } from './components/ConfigProvider';
import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    config: Config
  }

  extend type Config {
    first: Int!
  }
`;

export default function createApolloClient(initialState, ctx) {
  console.log('initialState', initialState);
  const cache = new InMemoryCache().restore(initialState);
  cache.writeData({
    data: {
      config: {
        first: 10,
        __typename: 'CONFIG',
      },
    },
  });
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache,
    typeDefs,
    resolvers: {},
  });
}
