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
  //Mobile devices
  const [refCodeMobile, InviewCodeMobile] = useInView();
  const [refCodeReviewMobile, InviewCodeReviewMobile] = useInView();
  const animationMobile = useAnimation();
  const animationCodeMobile = useAnimation();

  useEffect(() => {
    if (InviewCode) {
      animation.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          delay: 0.2,
        },
      });
    } else {
      animation.start({
        x: -100,
        opacity: 0,
        scale: 0.5,
      });
    }
    if (InviewCodeReview) {
      animationCode.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          delay: 0.2,
        },
      });
    } else {
      animationCode.start({
        x: 100,
        opacity: 0,
        scale: 0.5,
      });
    }

    //Mobile device
    if (InviewCodeMobile) {
      animationMobile.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          delay: 0.2,
        },
      });
    } else {
      animationMobile.start({
        x: -100,
        opacity: 0,
        scale: 0.5,
      });
    }
    if (InviewCodeReviewMobile) {
      animationCodeMobile.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          delay: 0.2,
        },
      });
    } else {
      animationCodeMobile.start({
        x: 100,
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [
    InviewCode,
    InviewCodeReview,
    InviewCodeMobile,
    InviewCodeReviewMobile,
    animationCode,
    animation,
    animationMobile,
    animationCodeMobile,
  ]);

  return (
    <Box sx={{ mt: 2, bgcolor: blue["50"] }}>
      <Grid
        container
        sx={{ textAlign: "center", display: { xs: "none", md: "flex" } }}
        spacing={2}
      >
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
            <img src={code} alt="" ref={refCode} width="600" height="600" />
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
          <Typography variant="h4">Hello I'm Nutthanon Thongcharoen</Typography>
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
          <Typography variant="h4">Interest web programming</Typography>
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
          <motion.div animate={animationCode}>
            <img
              src={codeReview}
              alt=""
              ref={refCodeReview}
              width="600"
              height="600"
            />
          </motion.div>
        </Grid>
      </Grid>

      {/* mobile Responsive */}

      <Grid
        container
        sx={{ textAlign: "center", display: { xs: "flex", md: "none" } }}
        spacing={2}
      >
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
          <motion.div animate={animationMobile}>
            <img
              src={code}
              alt=""
              ref={refCodeMobile}
              width="300"
              height="300"
            />
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
          <Typography variant="h4">Hello I'm Nutthanon Thongcharoen</Typography>
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
          <Typography variant="h4">Interest web programming</Typography>
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
          <motion.div animate={animationCodeMobile}>
            <img
              src={codeReview}
              alt=""
              ref={refCodeReviewMobile}
              width="300"
              height="300"
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoadMap;
