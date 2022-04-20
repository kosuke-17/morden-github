import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { parseCookies, setCookie, destroyCookie } from "nookies";

// エンドポイント
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
// Parse
const cookies = parseCookies();
let githubAccessToken: string;
if (cookies) {
  githubAccessToken = `Bearer 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`;
  // githubAccessToken = `Bearer ${cookies.accessToken}`;
}
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
