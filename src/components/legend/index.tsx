import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

const LegendIcons = ({ icon, children }: any) => (
  <Stack alignItems={"center"} justifyContent={"center"}>
    <Avatar src={icon} />
    <Typography sx={{ color: "#d3a625" }}>{children}</Typography>
  </Stack>
);

export default LegendIcons;
