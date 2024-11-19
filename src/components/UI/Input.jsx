import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Input = ({ icon, value, label, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      fullWidth
      {...props}
    />
  );
};

export default Input;
