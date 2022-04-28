import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { parseCookies } from "nookies";

// エンドポイント
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
// Parse
const cookies = parseCookies();
let githubAccessToken = `Bearer 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`;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: githubAccessToken,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
