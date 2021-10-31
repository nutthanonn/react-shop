import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Picture: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            minWidth: "100vw",
            textAlign: "center",
            position: "absolute",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="h3" color="white">
              &copy; Nutthanon All Project
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Picture;
