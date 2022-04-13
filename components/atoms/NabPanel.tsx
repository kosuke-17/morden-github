import React from "react";
import { Typography, Box } from "@mui/material";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// ナビゲーションのパネル
const NabPanel = ({ children, index, value }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default NabPanel;
