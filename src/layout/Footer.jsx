import React from "react";
import { Icons } from "../assets";
import { Box, Typography, Link, Grid, Container } from "@mui/material";
import { Margin } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: "350px",
        backgroundColor: "grey.100",
        color: "black",
        borderTop: "1px solid #e0e0e0",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Icons.FooterLogoIcon
              sx={{
                marginTop: "196px",
                marginLeft: "120px",
                marginBottom: "136px",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link href="#" color="inherit" underline="hover">
              О нас
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Контакты
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="#" color="inherit" underline="hover">
              Способы оплаты
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Условия доставки
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="#" color="inherit" underline="hover">
              Пользовательское соглашение
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Политика конфиденциальности
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          borderTop: "1px solid #e0e0e0",
          pt: 2,
        }}
      >
        <Typography variant="body2">
          <Link href="https://brandname.com" color="inherit" underline="hover">
            brandname.com
          </Link>
        </Typography>
        <Typography variant="body2">
          &copy; 2023. Все права защищены.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "green",
          color: "white",
          display: "flex",
          justifyContent: "center",
          py: 1,
          mt: 2,
        }}
      >
        <Typography variant="body2" sx={{ mx: 2 }}>
          ONLINESHOP
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }}>
          ONLINESHOP
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }}>
          ONLINESHOP
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }}>
          ONLINESHOP
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
