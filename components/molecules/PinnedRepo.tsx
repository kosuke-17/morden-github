import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid } from "@mui/material";
import type { RepositoryType } from "../../utils/Types";

//  styled-components
// ----------------------------------------------
const GlassStyle = styled.div`
  div:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
// ----------------------------------------------

type Props = {
  repo: RepositoryType;
};

const PinnedRepo: React.FC<Props> = (props) => {
  // データで取得したカラーを使うため
  const LanguageStyle = styled.div`
    color: ${props.repo.languages.edges[0].node.color};
  `;

  return (
    <GlassStyle>
      <Link href={props.repo.url} passHref>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {props.repo.name}
            </Typography>
            {props.repo.description ? (
              <Typography sx={{ mb: 1 }} color="text.secondary">
                {props.repo.description}
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
                <Grid item>{props.repo.languages.edges[0].node.name}</Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </GlassStyle>
  );
};

export default PinnedRepo;
