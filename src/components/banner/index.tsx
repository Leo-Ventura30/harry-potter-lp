import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import CustomButton from "../button";

const MainBanner = () => (
  <Container className="main-banner" maxWidth={"lg"}>
    <Stack height={500} justifyContent={"center"} alignItems={"center"} gap={4}>
      <Typography align="center" variant="h1">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit
      </Typography>
      <Typography align="center" variant="h2">
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <CustomButton href={"#chars"}>Descubra a Magia</CustomButton>
    </Stack>
  </Container>
);

export default MainBanner;
