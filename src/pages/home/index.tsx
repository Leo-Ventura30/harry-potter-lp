import React from "react";
import { Container } from "@mui/material";

import HeaderBanner from "../../components/header";
import LoadMore from "../../components/loadmore";
import Footer from "../../components/footer";

const Home = ({ icon, children }: any) => (
  <Container maxWidth={"xl"} className="app-container">
    <HeaderBanner />
    <LoadMore />
    <Footer />
  </Container>
);

export default Home;
