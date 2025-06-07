import { Paper, Stack, IconButton, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
const Box = ({ icons, text, textTitle, textchart, data, scheme }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "300px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "10px",
        gap: 1,
        flexGrow: 1,
      }}
    >
      <Stack direction={"column"}>
        {icons}

        <Typography variant="body1" color={theme.palette.text.primary}>
          {text}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          {textTitle}
        </Typography>
      </Stack>

      <Stack direction={"column"} alignItems={"center"}>
        <div style={{ height: "70px", width: "98px" }}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            innerRadius={0.5}
            padAngle={0.5}
            cornerRadius={2}
            theme={{
              text: {
                fontSize: 11,
                fill: theme.palette.mode === "light" ? "#333" : "#fff",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.mode === "light" ? "#333" : "#fff",
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.mode === "light" ? "#333" : "#fff",
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#00000",
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.mode === "light" ? "#333" : "#fff",
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.mode === "light" ? "#333" : "#fff",
                  outlineWidth: 0,
                  outlineColor: "#ffffff",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.mode === "light" ? "#333" : "#fff",
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.mode === "light" ? "#333" : "#fff",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                // @ts-ignore
                wrapper: {},
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.mode === "light" ? "#333" : "#fff",
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            activeOuterRadiusOffset={7}
            colors={{ scheme: scheme }}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={"null"}
            arcLabelsSkipAngle={1.2}
            arcLabelsTextColor={theme.palette.common.black}
          />
        </div>

        <Typography variant="body1" color={theme.palette.text.primary}>
          {textchart}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Box;
