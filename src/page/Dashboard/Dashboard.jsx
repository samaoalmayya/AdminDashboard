import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Text from "../../Components/Text";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {" "}
        <Text text="Dashboard" textTitle="Welcome To You Dashboard"></Text>
        <Box sx={{ textAlign: "right", m: "5px" }}>
          {" "}
          <Button variant="contained" color="primary">
            <DownloadOutlined></DownloadOutlined>
            Download Report
          </Button>
        </Box>
      </Stack>
      <Row1></Row1>
      <Row2></Row2>
      <Row3></Row3>
    </div>
  );
};

export default Dashboard;
