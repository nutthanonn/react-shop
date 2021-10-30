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
import { productsStoreImpl } from "../stores/store";
import { observer } from "mobx-react";

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
          <Button onClick={() => productStore.addToCart({ ...item })}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
});

export default Item;
