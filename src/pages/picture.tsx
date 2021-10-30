import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";

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
          <Typography variant="h3" color="primary">
            &copy; Nutthanon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Picture;
