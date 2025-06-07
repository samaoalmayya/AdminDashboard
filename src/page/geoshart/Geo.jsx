import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./Worldcountries";
import { data } from "./data";
import { Box, useTheme } from "@mui/material";
const Geo = ({ isDashborad = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashborad ? 400 : "75vh" }}>
      {" "}
      <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
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
        features={geo.features}
        margin={{ top: 100, right: 10, bottom: 20, left: 10 }}
        colors="RdYlBu"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderColor="#152538"
        legends={
          isDashborad
            ? []
            : [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 10,

                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 80,
                  itemHeight: 15,
                  itemDirection: "left-to-right",
                  itemTextColor: theme.palette.text.primary,
                  itemOpacity: 0.95,
                  symbolSize: 15,
                },
              ]
        }
      />
    </Box>
  );
};

export default Geo;
