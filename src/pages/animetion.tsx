import React from "react";
import { Box } from "@mui/material";
import Anime from "../video/Anime.mp4";
import { purple } from "@mui/material/colors";

const Animetion: React.FC = () => {
  return (
    <Box
      sx={{
        height: "120vw",
        display: "flex",
        alignItems: "flex-end",
        bgcolor: "rgb(5, 3, 44)",
      }}
    >
      <Box>
        <video autoPlay loop muted>
          <source src={Anime} />
        </video>
      </Box>
    </Box>
  );
};

export default Animetion;
