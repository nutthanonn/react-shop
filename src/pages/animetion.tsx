import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Anime from "../video/Anime.mp4";

const Animetion: React.FC = () => {
  const [ref, Inview] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (Inview) {
      animation.start({
        opacity: 1,
        x: [-100, 0],
        transition: {
          type: "spring",
          delay: 0.2,
        },
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [animation, Inview]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgb(5, 3, 44)",
      }}
    >
      <Box
        ref={ref}
        sx={{
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div animate={animation}>
          <Typography variant="h2" color="white" sx={{ textAlign: "center" }}>
            Follow-up at GitHub
          </Typography>
        </motion.div>
      </Box>
      <Box sx={{ overflow: "hidden", display: { xs: "none", md: "flex" } }}>
        <video autoPlay loop muted>
          <source src={Anime} />
        </video>
      </Box>
    </Box>
  );
};

export default Animetion;
