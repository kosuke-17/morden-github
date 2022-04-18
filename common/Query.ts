import { gql } from "@apollo/client";

export const OVERVIEW_QUERY = gql`
  {
    user(login: "shiibawataru") {
      repositories(last: 6) {
        nodes {
          id
          name
          description
          url
          languages(first: 5, orderBy: { direction: DESC, field: SIZE }) {
            edges {
              node {
                id
                color
                name
              }
            }
            nodes {
              color
              id
              name
            }
          }
        }
      }
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
            createdAt
            description
            url
          }
        }
      }
    }
  }
`;
