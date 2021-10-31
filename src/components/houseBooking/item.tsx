import React from "react";
import { Box, Container } from "@mui/material";

interface pictureProps {
  picture1?: string;
  picture2?: string;
  picture3?: string;
}

interface ItemProps {
  id: string;
  status: boolean;
  villageNo: string;
  size: string; //small medium large
  room: number;
  bedRoom: number;
  toilet: number;
  price: number;
  picture?: pictureProps;
}

const Item: React.FC = () => {
  return (
    <Box>
      <p>Hello</p>
    </Box>
  );
};

export default Item;
