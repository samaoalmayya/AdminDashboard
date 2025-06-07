import React from "react";
import Geo from "./Geo";
import Text from "../../Components/Text";
import { Box } from "@mui/material";
const Geoshart = () => {
  return (
    <div>
      <Box sx={{ pb: 2 }}>
        <Text text="Geography" textTitle="Simple Geography Chart"></Text>
      </Box>
      <Geo></Geo>
    </div>
  );
};

export default Geoshart;
