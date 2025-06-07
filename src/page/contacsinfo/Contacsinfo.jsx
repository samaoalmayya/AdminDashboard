import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./Data";
import Text from "../../Components/Text";
const Contacsinfo = () => {
  return (
    <Box sx={{ height: 600, width: "98%" }}>
      <Box sx={{ pb: 2 }}>
        <Text
          text="Contacts"
          textTitle="List of Contacts for Future Reference"
        ></Text>
      </Box>
      <DataGrid
        // slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
        showToolbar
      />
    </Box>
  );
};

export default Contacsinfo;
