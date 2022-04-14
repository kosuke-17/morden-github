import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PinnedRepo = () => {
  return (
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
  );
};

export default PinnedRepo;
