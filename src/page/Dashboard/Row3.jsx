import { Box, Paper, Typography, useTheme } from "@mui/material";

import React from "react";
import Pie from "../../page/piechart/Pie";
import Geo from "../../page/geoshart/Geo";
import Bar from "../../page/barchaet/bar";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box display={"flex"} mt={3} flexWrap={"wrap"} gap={1.5}>
      <Paper
        sx={{
          width: "27%",

          minWidth: "400px",
          flexGrow: 1,
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard="true"></Pie>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "32%", minWidth: "400px", flexGrow: 1 }}>
        {" "}
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard="true" />
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Geo isDashborad="true"></Geo>
      </Paper>
    </Box>
  );
};

export default Row3;
