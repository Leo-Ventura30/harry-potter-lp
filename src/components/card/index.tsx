import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import Invisibility from "../../assets/svg/invisibility.svg";
import Elder from "../../assets/svg/elder.svg";
import Nimbus from "../../assets/svg/nimbus.svg";
import Hat from "../../assets/svg/hat.svg";
import Char from "../../assets/svg/person.svg";
import Time from "../../assets/svg/time.svg";
import Deathly from "../../assets/svg/deathly.svg";

const CustomCard = ({ char }: any) => (
  <Card elevation={2} sx={{ width: 280, backgroundColor: "#f0c75e" }}>
    <CardMedia
      className="card-image"
      sx={{ height: 250 }}
      image={char.image}
      title={char.name}
    >
      {!char.image && (
        <Stack height={240} justifyContent={"center"} alignItems={"center"}>
          <img width="60%" src={Invisibility} alt="" />
          <Typography fontWeight={"700"} fontSize={"1.5rem"}>
            sem foto
          </Typography>
        </Stack>
      )}

      <Stack height={240} alignItems={"flex-start"} justifyContent={"flex-end"}>
        {char.patronus && (
          <Chip
            avatar={<Avatar src={Elder} />}
            label={char.patronus}
            sx={{
              backgroundColor: "#eeba30",
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#ae0001",
              marginLeft: 1,
              paddingX: 1,
            }}
          />
        )}
      </Stack>
    </CardMedia>
    <CardContent className="card-content">
      <Stack spacing={0.5} divider={<Divider />}>
        <Stack className="info">
          <Avatar
            sx={{ width: 30, height: 30 }}
            variant="rounded"
            src={Char}
            alt="ator"
          />
          <Typography>{char.actor}</Typography>
        </Stack>
        <Stack className="info">
          <Avatar
            sx={{ width: 30, height: 30 }}
            variant="rounded"
            src={Nimbus}
            alt="personagem"
          />
          <Typography>{char.name}</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack className="info">
            <Avatar
              sx={{ width: 30, height: 30 }}
              variant="rounded"
              src={Time}
              alt="tempo"
            />
            <Typography>
              {char.dateOfBirth
                ? char.dateOfBirth.replaceAll("-", "/")
                : char.yearOfBirth}
            </Typography>
          </Stack>
          <Stack className="info">
            <Avatar
              sx={{ width: 30, height: 30 }}
              variant="rounded"
              src={Deathly}
              alt="reliquias da morte"
            />
            <Typography>{char.alive ? "Vivo" : "Faleceu"}</Typography>
          </Stack>
        </Stack>

        <Stack className="info">
          <Avatar
            sx={{ width: 30, height: 30 }}
            variant="rounded"
            src={Hat}
            alt="chapéu"
          />
          <Typography>{char.house}</Typography>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

export default CustomCard;
