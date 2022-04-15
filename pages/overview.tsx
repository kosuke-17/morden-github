// import React from "react";

// const overview = () => {
//   return <div>overview</div>;
// };

// export default overview;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { gql, useQuery } from "@apollo/client";
import PinnedRepo from "../components/molecules/PinnedRepo";
import Contributions from "../components/molecules/Contributions";

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       boxShadow: 3,
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//     }}
//   >
//     •
//   </Box>
// );

// クエリ文
// const GET_SAMPLE = gql`
//   {
//     viewer {
//       login
//     }
//   }
// `;
const GET_TOTALCONTRIBUTIONS = gql`
  {
    viewer {
      login
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
    user(login: "shiibawataru") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

const overview: React.FC = () => {
  //   const { loading, error, data } = useQuery(GET_TOTALCONTRIBUTIONS);
  //   // クエリ実行中の表示
  //   if (loading) return <p>Loading ...</p>;
  //   // エラー発生時（レスポンスがないとき）の表示
  //   if (error) return <p>ERR!!!{error.message}</p>;
  //   console.log(data);
  return (
    <>
      <div>Popular repositories</div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
        <Grid item xs={6}>
          <PinnedRepo />
        </Grid>
      </Grid>
      <Contributions />
    </>
  );
};

export default overview;
