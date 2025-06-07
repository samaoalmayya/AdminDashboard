import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// @ts-ignore
import Line from "../../page/linechart/LIne";

import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} pt={3} flexWrap={"wrap"} gap={1}>
      <Paper
        sx={{
          maxWidth: 900,
          minWidth: 700,
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h5"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography ml={4}>$ 50,330,11</Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlined sx={{ fontSize: "30px" }}></DownloadOutlined>
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true}></Line>
      </Paper>

      <Box
        sx={{
          maxHeight: 370,
          overflow: "auto",
          minWidth: 300,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            variant="body1"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            padding={1.2}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={item.txId}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
