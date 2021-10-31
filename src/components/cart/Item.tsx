import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { productsStoreImpl } from "../../stores/productStore";
import { observer } from "mobx-react";
import { ToastContainer, toast, Slide } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
interface ProduceType {
  item: {
    id: string;
    productName: string;
    picture: string;
    price: number;
  };
  productStore: productsStoreImpl;
}

const Item: React.FC<ProduceType> = observer(({ item, productStore }) => {
  const addCart = () => {
    productStore.addToCart({ ...item });
    toast("Add to cart!", { transition: Slide });
  };

  return (
    <Box>
      <Card>
        <CardMedia image={item.picture} component="img" height="300" />
        <CardContent>
          <Typography variant="h4">{item.productName}</Typography>
          <Typography variant="h5" color="gray">
            -{item.price} Bath
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" }}>
          <Button onClick={addCart}>Add to cart</Button>
        </CardActions>
      </Card>
      <ToastContainer
        limit={3}
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
});

export default Item;
