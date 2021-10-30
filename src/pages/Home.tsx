import React from "react";
import { Box, Typography } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Cart from "./Cart";

const Home: React.FC = () => {
  return (
    <Box>
      <AboutMe />
      <Typography variant="h3" sx={{ textAlign: "center", p: 5 }}>
        Shopping Cart
      </Typography>
      <Cart />
    </Box>
  );
};

export default Home;