import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Overview = () => {
  return (
    <>
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

export default Overview;
