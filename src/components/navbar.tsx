import React from "react";
import { Box, Typography, Toolbar, AppBar, Button, Badge } from "@mui/material";
import { AiOutlineShoppingCart, AiFillApple } from "react-icons/ai";

const Nav: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "inline-block",
      }}
    >
      <AppBar>
        <Box>
          <Toolbar>
            <Box sx={{ mr: 1 }}>
              <AiFillApple size="30" />
            </Box>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Store
            </Typography>
            <Button
              endIcon={
                <Badge badgeContent={1} color="error">
                  <AiOutlineShoppingCart color="white" />
                </Badge>
              }
            >
              <Typography variant="h6" color="white">
                Cart
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Nav;
