import React, { useEffect, useState } from "react";
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import LegendIcons from "../legend";
import CustomButton from "../button";
import CustomCard from "../card";

import Elder from "../../assets/svg/elder.svg";
import Nimbus from "../../assets/svg/nimbus.svg";
import Hat from "../../assets/svg/hat.svg";
import Char from "../../assets/svg/person.svg";
import Time from "../../assets/svg/time.svg";
import Deathly from "../../assets/svg/deathly.svg";
import Pombo from "../../assets/svg/pombo.svg";
import Shield from "../../assets/svg/shield-color.svg";
import api from "../../services/api";

const LoadMore = () => {
  const [characters, setCharacters] = useState([]);
  const [itemPerPage, setItemPerPage] = useState<number>(8);

  useEffect(() => {
    api
      .get("/characters")
      .then((e) => {
        setCharacters(e.data);
      })
      .catch((e) => {
        console.log("Algo deu errado", e.message);
      });
  }, [itemPerPage]);

  return (
    <Container id="chars" className="container-chars" maxWidth={"xl"}>
      <Container maxWidth={"lg"}>
        <Stack alignItems={"center"} py={5}>
          <Stack width={"60%"} alignItems={"center"}>
            <Avatar src={Pombo}></Avatar>
            <Typography
              textAlign={"center"}
              fontSize={"2rem"}
              textTransform={"uppercase"}
              sx={{ color: "#fff" }}
            >
              Personagens
            </Typography>
          </Stack>

          <Stack alignItems={"center"} pt={4}>
            <Stack direction={"row"}>
              <Avatar src={Shield} />
              <Typography sx={{ color: "#d3a625" }} fontSize={"1.6rem"}>
                Legenda
              </Typography>
              <Avatar src={Shield} />
            </Stack>
            <Stack direction={"row"} spacing={5} pt={4}>
              <LegendIcons icon={Char} children={"Autor"} />
              <LegendIcons icon={Nimbus} children={"Personagem"} />
              <LegendIcons icon={Time} children={"Data de Nascimento"} />
              <LegendIcons icon={Deathly} children={"Se está vivo"} />
              <LegendIcons icon={Hat} children={"Residência"} />
              <LegendIcons icon={Elder} children={"Patrono"} />
            </Stack>
          </Stack>
        </Stack>

        <Grid
          container
          rowSpacing={1}
          m={2}
          spacing={{ xs: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
          maxWidth={"lg"}
        >
          {characters.slice(0, itemPerPage).map((char, key) => (
            <Grid key={key} item xs={3} md={4} mb={2}>
              <CustomCard char={char} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems={"center"} pb={4}>
          <CustomButton onClick={() => setItemPerPage((prev) => prev + 8)}>
            Carregar mais
          </CustomButton>
        </Stack>
      </Container>
    </Container>
  );
};

export default LoadMore;
