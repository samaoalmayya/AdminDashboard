import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Text from "../../Components/Text";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const Profileform = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    // @ts-ignore
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("Doneeeeeeeeeeeeeeeeeee");
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box sx={{ pb: 2 }}>
        <Text text="TEAM" textTitle="Managing the Team Members"></Text>
      </Box>
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          id="filled-basic"
          label="First Name"
          variant="filled"
          // @ts-ignore
          error={errors.firstName}
          helperText={errors.firstName ? "This field is required." : ""}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          // @ts-ignore
          error={errors.lastName}
          helperText={errors.lastName ? "This field is required." : ""}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          errors.ContactNumber ? "Please provide a valid Phone number" : null
        }
        {...register("ContactNumber", {
          required: true,
          pattern: phoneRegExp,
          maxLength: 10,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Rule"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        {" "}
        <Button type="submit" variant="contained" sx={{ textAlign: "right" }}>
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Profileform;
