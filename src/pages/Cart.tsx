import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { productData } from "../data/ProductData";
import Item from "../components/cart/Item";
import { productStore } from "../stores/productStore";

const Cart: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", p: 5 }}>
        Shopping Cart
        <Typography variant="body2" sx={{ textAlign: "center", pt: 1 }}>
          using MobX-react
        </Typography>
      </Typography>
      <Grid container sx={{ textAlign: "center", padding: 2 }} spacing={2}>
        {productData.map((item) => {
          return (
            <Grid item md={4} xs={6}>
              <Item key={item.id} item={item} productStore={productStore} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Cart;
