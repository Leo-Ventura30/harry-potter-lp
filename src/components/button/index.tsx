import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, onClick, href }: any) => (
  <Button
    className="default-button"
    sx={{ width: 200, padding: 1.5 }}
    variant="contained"
    onClick={onClick}
    href={href}
  >
    {children}
  </Button>
);

export default CustomButton;
