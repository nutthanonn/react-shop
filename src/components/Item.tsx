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
import "./style.css";

interface ProduceType {
  id: string;
  productName: string;
  picture: string;
  price: number;
}

const Item: React.FC<ProduceType> = (props) => {
  return (
    <Box>
      <Card>
        <CardMedia image={props.picture} component="img" height="300" />
        <CardContent>
          <Typography variant="h4">{props.productName}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" }}>
          <Button>Add to cart</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
