import { InputAdornment, styled, TextField } from "@mui/material";
import React from "react";

const Input = ({ icon, value, label, ...props }) => {
  return (
    <StyledTextField
      label={label}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default Input;

const StyledTextField = styled(TextField)({
  borderRadius: "8px",
  backgroundColor: "#FFFFF",
  border: "1px solid #6A6A6A",
});
