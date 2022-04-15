import { gql } from "@apollo/client";

// export const PINNED_QUERY = gql`
//     user(login: $user) {
//       pinnedItems(first: 6) {
//         edges {
//           node {
//             ... on Repository {
//               id
//               name
//               url
//               createdAt
//               languages(first: 10) {
//                 edges {
//                   node {
//                     id
//                     name
//                     color
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
// `;

export const POPULAR_REPOSITORIES_QUERY = gql`
  {
    user(login: "shiibawataru") {
      repositories(last: 6) {
        nodes {
          id
          name
          description
          url
          languages(first: 5, orderBy: { direction: DESC, field: SIZE }) {
            nodes {
              color
              id
              name
            }
          }
        }
      }
    }
  }
`;
