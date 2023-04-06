import React from "react";
import { AppBar, Box, Container, Stack, Tab } from "@mui/material";

import Logo from "../../assets/svg/castle-hogwarts.svg";
import MainBanner from "../banner";

const HeaderBanner = () => (
  <Container id="home" maxWidth={"xl"} className="header-content">
    <AppBar
      className="app-bar"
      position={"relative"}
      color="transparent"
      variant="elevation"
    >
      <Container maxWidth={"lg"}>
        <Stack
          className="nav"
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          height={80}
          maxWidth={"lg"}
        >
          <Box sx={{ width: 60, height: 60 }}>
            <img src={Logo} alt="logo" />
          </Box>
          <Stack spacing={2} direction="row">
            <Tab label="Home" href="#home" />
            <Tab label="Personagens" href="#chars" />
          </Stack>
        </Stack>
      </Container>
    </AppBar>
    <MainBanner />
  </Container>
);

export default HeaderBanner;
