import {
  IconButton,
  InputAdornment,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Input from "../components/UI/Input";
import ButtonComponent from "../components/UI/ButtonComponent";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledPaper elevation={3}>
      <StyledTypography variant="h4">Вход</StyledTypography>
      <StyledForm>
        <StyledLabale>
          Логин
          <StyledInput
          type="email"
            placeholder=" Введите логин"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </StyledLabale>

        <StyledLabale>
          Пароль
          <StyledInput
            type={showPassword ? "text" : "password"}
            placeholder=" Введите пароль"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </StyledLabale>

        <StyledButtonComponent type={"submit"}>Войти</StyledButtonComponent>
      </StyledForm>
    </StyledPaper>
  );
};

export default Login;

export const StyledPaper = styled(Paper)({
  width: "413px",
  height: "411px",
  padding: "5px auto",
  margin: "173px auto",
  display: "flex",
  flexDirection: "column",
  gap: "27px",
  boxShadow: "none",
});
export const StyledTypography = styled(Typography)({
  fontSize: "32px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "400",
});
export const StyledForm = styled("form")({
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  width: "100%",
});

export const StyledLabale = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  marginBottom: theme.spacing(1),
  color: "#181818",
  fontSize: "12px",
  fontWeight: "400",
}));
export const StyledInput = styled(Input)({
  width: "408px",
  border: "none",
  height: "48px",
});

export const StyledButtonComponent = styled(ButtonComponent)({
  width: "408px",
  height: "50px",
  backgroundColor: "#121314",
  color: "#FAFAFA",
  fontFamily: "Arial, sans-serif",
  fontSize:"20px",
  fontWeight: "400",

});
