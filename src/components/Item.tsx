import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

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
        <CardContent>
          <Typography>{props.productName}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
