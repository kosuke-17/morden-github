import React from "react";
import Button from "@mui/material/Button";
type Props = {
  name: String;
};
const ButtonRepos = ({ name }: Props) => {
  return (
    <Button variant="contained" color="success">
      {name}
    </Button>
  );
};

export default ButtonRepos;
