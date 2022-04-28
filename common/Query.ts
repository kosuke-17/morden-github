import { gql } from "@apollo/client";

export const OVERVIEW_QUERY = gql`
  {
    user(login: "kosuke-17") {
      repositories(last: 6) {
        nodes {
          id
          name
          description
          url
          createdAt
          languages(first: 5, orderBy: { direction: DESC, field: SIZE }) {
            edges {
              node {
                id
                color
                name
              }
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
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

// export const COTRIBUTIONS_QUERY = gql`
//   {
//     user(login: "shiibawataru") {
//       contributionsCollection {
//         contributionCalendar {
//           totalContributions
//         }
//       }
//     }
//   }
// `;
export const REPOSITORIES_QUERY = gql`
  {
    user(login: "i-hidaka") {
      id
      login
      name
      repositories(
        last: 100
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        edges {
          node {
            id
            name
            url
            description
            primaryLanguage {
              name
              color
            }
            updatedAt
            isPrivate
            isFork
            isArchived
            isMirror
            isTemplate
            stargazerCount
            owner {
              login
            }
          }
        }
      }
    }
  }
`;
