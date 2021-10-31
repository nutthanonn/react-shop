import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import code from "../images/coding.svg";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { blue } from "@mui/material/colors";

const RoadMap: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Box sx={{ mt: 2, bgcolor: blue["50"] }}>
      <Grid container sx={{ textAlign: "center" }} spacing={2}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div style={{ scale }}>
            <img src={code} width="600" height="600" />
          </motion.div>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoadMap;
