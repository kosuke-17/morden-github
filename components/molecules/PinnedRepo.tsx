import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Link from "next/link";

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
  console.log(props.child);
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
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.child.description} || 空白
            </Typography>
            <Typography variant="body2">●React</Typography>
          </CardContent>
        </Card>
      </Link>
    </GlassStyle>
  );
};

export default PinnedRepo;
