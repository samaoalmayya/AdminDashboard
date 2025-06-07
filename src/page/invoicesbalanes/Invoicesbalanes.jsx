import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import Text from "../../Components/Text";
const Invoicesbalanes = () => {
  return (
    <Box sx={{ height: 600, width: "98%" }}>
      <Box sx={{ pb: 2 }}>
        <Text text="INVOICES" textTitle="List of invoices Balances"></Text>
      </Box>
      <DataGrid
        // slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Invoicesbalanes;
