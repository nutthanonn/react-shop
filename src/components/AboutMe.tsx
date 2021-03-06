import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { motion } from "framer-motion";
import { SiReact, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const buttonVariants = {
  hover: {
    scale: [1, 1.2, 1],
  },
};

const AboutMe: React.FC = () => {
  return (
    <Box sx={{ bgcolor: blue[50], padding: 3 }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 5 }}>
        Experience
      </Typography>
      <Grid container sx={{ textAlign: "center", mb: 2 }}>
        <Grid item md={3} xs={6}>
          <Box>
            <IconButton>
              <motion.div variants={buttonVariants} whileHover="hover">
                <SiReact size="100" color={blue[300]} />
              </motion.div>
            </IconButton>
            <Typography variant="h4">React</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={6}>
          <Box>
            <IconButton>
              <motion.div variants={buttonVariants} whileHover="hover">
                <FaNodeJs size="100" color={green[800]} />
              </motion.div>
            </IconButton>
            <Typography variant="h4">NodeJS</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={6}>
          <Box>
            <IconButton>
              <motion.div variants={buttonVariants} whileHover="hover">
                <SiPostgresql size="100" color={blue[900]} />
              </motion.div>
            </IconButton>
            <Typography variant="h4">Sql</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={6}>
          <Box>
            <IconButton>
              <motion.div variants={buttonVariants} whileHover="hover">
                <AiFillGithub size="100" />
              </motion.div>
            </IconButton>
            <Typography variant="h4">Git</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
