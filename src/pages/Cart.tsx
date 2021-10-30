import React from "react";
import { Box, Grid } from "@mui/material";
import { productData } from "../data/ProductData";
import Item from "../components/Item";

const Cart: React.FC = () => {
  return (
    <Box>
      <Grid container sx={{ textAlign: "center", padding: 2 }} spacing={2}>
        {productData.map((item) => {
          return (
            <Grid item md={4} xs={6}>
              <Item {...item} key={item.id} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Cart;
