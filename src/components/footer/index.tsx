import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import LegendIcons from "../legend";
import Warner from "../../assets/imgs/waner-bros.png";
import HarryPotter from "../../assets/imgs/Harry-Potter-Simbolo.png";
const Footer = ({ icon, children }: any) => (
  <Container className="footer" maxWidth={"xl"}>
    <Container className="content" maxWidth={"lg"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        py={2}
        mb={2}
      >
        <Stack spacing={1}>
          <a href="#home">
            <Typography
              textTransform={"uppercase"}
              sx={{ color: "#eeba30", cursor: "pointer" }}
            >
              Home
            </Typography>
          </a>
          <a href="#chars">
            <Typography
              textTransform={"uppercase"}
              sx={{ color: "#eeba30", cursor: "pointer" }}
            >
              Personagens
            </Typography>
          </a>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography sx={{ color: "#fff" }}>@Desenvolvido por</Typography>
          <Typography
            fontWeight={700}
            fontSize={"1rem"}
            sx={{ color: "#eeba30" }}
            children={"Leo Ventura"}
          />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <LegendIcons icon={HarryPotter} children={"Harry Potter"} />
          <LegendIcons icon={Warner} children={"Warner Bros"} />
        </Stack>
      </Stack>
    </Container>
  </Container>
);

export default Footer;
