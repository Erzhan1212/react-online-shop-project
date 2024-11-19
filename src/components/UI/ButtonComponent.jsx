import { Button, styled } from "@mui/material";
import React from "react";

const ButtonComponent = ({ type, onclick, disabled, children, ...rest }) => {
  return (
    <StyledButton type="type" onClick={onclick} disabled={disabled} {...rest}>
      
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;


const StyledButton=styled("Button")({
  width:"460px",
  
})