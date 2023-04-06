import React from "react";
import { Container } from "@mui/material";

import HeaderBanner from "../../components/header";
import LoadMore from "../../components/loadmore";

const Home = ({ icon, children }: any) => (
  <Container maxWidth={"xl"} className="app-container">
    <HeaderBanner />
    <LoadMore />
  </Container>
);

export default Home;
