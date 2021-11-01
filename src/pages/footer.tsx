import React from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { BsGithub, BsFacebook } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        height: 100,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h6">&copy; Nutthanon Thongcharoen</Typography>
      </Box>
      <Box>
        <Tooltip title="GitHub">
          <IconButton
            sx={{ color: "black" }}
            href="https://github.com/nutthanonn"
            target="_blank"
          >
            <BsGithub />
          </IconButton>
        </Tooltip>
        <Tooltip title="FaceBook">
          <IconButton
            sx={{ color: "blue" }}
            href="https://www.facebook.com/Nutthanon.tho"
            target="_blank"
          >
            <BsFacebook />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Footer;
