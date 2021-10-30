import React from "react";
import { Box, Typography, Toolbar, AppBar, Button, Badge } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import { observer } from "mobx-react";
import { productsStoreImpl } from "../stores/store";

interface productStoreProps {
  productStore: productsStoreImpl;
}

const Nav: React.FC<productStoreProps> = observer(({ productStore }) => {
  const count = productStore.product.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

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
              <FaStoreAlt size="30" />
            </Box>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Store
            </Typography>
            <Button
              endIcon={
                <Badge badgeContent={count} color="error">
                  <AiOutlineShoppingCart color="white" />
                </Badge>
              }
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography variant="h6" color="white">
                  Cart
                </Typography>
              </Box>
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
});

export default Nav;
