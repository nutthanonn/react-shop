import React from "react";
import { Box, Grid } from "@mui/material";
import { productData } from "../data/ProductData";
import Item from "../components/Item";
import { productStore } from "../stores/store";

const Cart: React.FC = () => {
  return (
    <Box>
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
