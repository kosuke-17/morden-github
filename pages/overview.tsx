import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import client from "../apollo-client";
import { gql, useQuery } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

// クエリ文用変数
const GET_SAMPLE = gql`
  {
    viewer {
      login
    }
  }
`;

// 使い方1（getStaticPropで使う場合）
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_SAMPLE,
  });
  console.log(data);

  return {
    props: { data },
  };
};

// 使い方2（useQueryで使う場合）
// export const Issues = () => {
//   const { loading, error, data } = useQuery(GET_SAMPLE);
//   // クエリ実行中の表示
//   if (loading) return <p>Loading ...</p>;
//   // エラー発生時（レスポンスがないとき）の表示
//   if (error) return <p>{error.message}</p>;
//   return;
//   <>
//     <div>{data}</div>
//   </>;
// };

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const overview = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>ログインユーザー：{data.viewer.login}</div>
      <div>Popular repositories</div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                modern-github
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                githubをモダンに作り変えてみた
              </Typography>
              <Typography variant="body2">●React</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default overview;
