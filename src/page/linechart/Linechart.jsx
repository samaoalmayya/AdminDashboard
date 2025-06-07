import React from "react";
import Line from "./LIne";
import { Box } from "@mui/material";
import Text from "../../Components/Text";
const Linechart = () => {
  return (
    <div>
      <Box sx={{ pb: 2 }}>
        <Text text="Linechart" textTitle="Simple Linechart "></Text>
      </Box>
      <Line isDashboard={false}></Line>
    </div>
  );
};

export default Linechart;
