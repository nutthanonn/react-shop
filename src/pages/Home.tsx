import React from "react";
import { Box } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Cart from "./Cart";

const Home: React.FC = () => {
  return (
    <Box>
      <AboutMe />
      <Cart />
    </Box>
  );
};

export default Home;
