import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Text = ({ text, textTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        color={theme.palette.info.light}
        fontWeight={"bold"}
      >
        {text}
      </Typography>
      <Typography variant="body2" color={theme.palette.text.primary}>
        {textTitle}
      </Typography>
    </Box>
  );
};

export default Text;
