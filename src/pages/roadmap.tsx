import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import code from "../images/coding.svg";
import codeReview from "../images/codeReview.svg";
import { motion, useAnimation } from "framer-motion";
import { blue } from "@mui/material/colors";
import { useInView } from "react-intersection-observer";

const RoadMap: React.FC = () => {
  const [refCode, InviewCode] = useInView();
  const [refCodeReview, InviewCodeReview] = useInView();
  const animation = useAnimation();
  const animationCode = useAnimation();

  useEffect(() => {
    if (InviewCode) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.4,
        },
      });
    } else {
      animation.start({
        x: -100,
        opacity: 0,
      });
    }
    if (InviewCodeReview) {
      animationCode.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.4,
        },
      });
    } else {
      animationCode.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [InviewCode, InviewCodeReview]);

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
          <motion.div animate={animation}>
            <img src={code} width="600" height="600" alt="" ref={refCode} />
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
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 30,
          }}
        >
          <motion.div animate={animationCode}>
            <img
              src={codeReview}
              width="600"
              height="600"
              alt=""
              ref={refCodeReview}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoadMap;
