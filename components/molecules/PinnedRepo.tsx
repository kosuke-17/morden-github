import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

//  styled-components
// ----------------------------------------------
const GlassStyle = styled.div`
  div:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

// ----------------------------------------------

const PinnedRepo = () => {
  return (
    <GlassStyle>
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 10,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
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
    </GlassStyle>
  );
};

export default PinnedRepo;
