import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

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
const Pie = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box height={isDashboard ? "220px" : "75vh"}>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
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
        margin={
          isDashboard
            ? { top: 10, right: 20, bottom: 10, left: 20 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]
        }
      />
    </Box>
  );
};

export default Pie;
