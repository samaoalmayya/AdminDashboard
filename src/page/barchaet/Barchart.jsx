import React from "react";
import Bar from "./bar";
import { Box } from "@mui/material";
import Text from "../../Components/Text";
const Barchart = () => {
  return (
    <div>
      <Box sx={{ pb: 2 }}>
        <Text text="Barchart" textTitle="Simple  Barchart"></Text>
      </Box>
      <Bar></Bar>
    </div>
  );
};

export default Barchart;
