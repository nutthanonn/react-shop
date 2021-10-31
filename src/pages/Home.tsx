import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Cart from "./Cart";
import { useInView } from "react-intersection-observer";

const Home: React.FC = () => {
  const { ref, InView } = useInView<boolean>();

  return (
    <Box>
      <AboutMe />
      <Typography variant="h3" sx={{ textAlign: "center", p: 5 }}>
        Shopping Cart
        <Typography variant="body2" sx={{ textAlign: "center", pt: 1 }}>
          https://github.com/nutthanonn
        </Typography>
      </Typography>

      <Cart />
    </Box>
  );
};

export default Home;
