import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid } from "@mui/material";

//  styled-components
// ----------------------------------------------
const GlassStyle = styled.div`
  div:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

// ----------------------------------------------

const PinnedRepo = (props: any) => {
  // データで取得したカラーを使うため
  const LanguageStyle = styled.div`
    color: ${props.child.languages.nodes[0].color};
  `;

  return (
    <GlassStyle>
      <Link href={props.child.url} passHref>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: 10,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {props.child.name}
            </Typography>
            {props.child.description ? (
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.child.description}
              </Typography>
            ) : (
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
                <Grid item>{props.child.languages.nodes[0].name}</Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </GlassStyle>
  );
};

export default PinnedRepo;
