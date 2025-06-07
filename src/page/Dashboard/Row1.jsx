import { EmailOutlined } from "@mui/icons-material";
import { Paper, Stack, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Box from "./Box";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";
const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
      pt={2}
    >
      <Box
        icons={
          <EmailIcon
            sx={{ fontSize: "22px", color: theme.palette.secondary.main }}
          ></EmailIcon>
        }
        text={"12,361"}
        textTitle={"Email Sent"}
        textchart={"+14%"}
        data={data1}
        scheme={"paired"}
      ></Box>
      <Box
        icons={
          <PointOfSaleIcon
            sx={{ fontSize: "22px", color: theme.palette.secondary.main }}
          />
        }
        text={"431,225"}
        textTitle={"Sales obtained"}
        textchart={"+21%"}
        data={data2}
        scheme={"accent"}
      ></Box>
      <Box
        icons={
          <PersonAddIcon
            sx={{ fontSize: "22px", color: theme.palette.secondary.main }}
          />
        }
        text={"32,441"}
        textTitle={"New Clients"}
        textchart={"+5%"}
        data={data3}
        scheme={"category10"}
      ></Box>
      <Box
        icons={
          <TrafficIcon
            sx={{ fontSize: "22px", color: theme.palette.secondary.main }}
          />
        }
        data={data4}
        text={"1,325,134"}
        textTitle={"Traffic Received"}
        textchart={"+43%"}
        scheme={"set1"}
      ></Box>
    </Stack>
  );
};

export default Row1;
