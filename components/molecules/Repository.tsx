import React from "react";
import Card from "@mui/material/Card";
import { RepositoriesType } from "../../utils/Types";
import { ReportGmailerrorredOutlined } from "@mui/icons-material";
import Link from "next/link";
import { CardContent, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";
import moment from "moment";

//  styled-components
// ----------------------------------------------
const GlassStyle = styled.div`
  div:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

type Props = {
  repo: RepositoriesType;
};
const Repository = ({ repo }: Props) => {
  // データで取得したカラーを使うため
  const LanguageStyle = styled.div`
    color: ${repo.node.primaryLanguage.color};
  `;
  // ----------------------------------------------

  return (
    <GlassStyle>
      <Link href={repo.node.url} passHref>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {repo.node.name}
            </Typography>
            {repo.node.description ? (
              <Typography sx={{ mb: 1 }} color="text.secondary">
                {repo.node.description}
              </Typography>
            ) : (
              <Typography sx={{ mb: 1 }} color="text.secondary">
                &nbsp;
              </Typography>
            )}
            <Typography variant="body2">
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <LanguageStyle>
                    <CircleIcon />
                  </LanguageStyle>
                </Grid>
                <Grid item xs={3}>
                  {repo.node.primaryLanguage.name}
                </Grid>
                <Grid item xs={5}>
                    
                  Updated {moment(repo.node.updatedAt).fromNow()}
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </GlassStyle>
  );
};

export default Repository;
