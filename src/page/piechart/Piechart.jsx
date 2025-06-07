import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";
import Text from "../../Components/Text";
const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "hsl(107, 70%, 50%)",
  },
  {
    id: "Html",
    label: "stylus",
    value: 543,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 401,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "Node.JS",
    label: "haskell",
    value: 434,
    color: "hsl(172, 70%, 50%)",
  },
  {
    id: "C++",
    label: "nue",
    value: 133,
    color: "hsl(219, 70%, 50%)",
  },
];

const Piechart = () => {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ pb: 2 }}>
        <Text text="Pie Chart" textTitle="Simple Pie Chart"></Text>
      </Box>
      <Pie></Pie>
    </div>
  );
};

export default Piechart;
