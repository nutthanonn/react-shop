import React from "react";
import { Box } from "@mui/material";

interface pictureProps {
  picture1?: string;
  picture2?: string;
  picture3?: string;
}

interface ItemProps {
  item: {
    id: string;
    status: boolean;
    villageNo: string;
    size: string; //small medium large
    room: number;
    bedRoom: number;
    toilet: number;
    price: number;
    picture?: pictureProps;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Box>
      <p>{item.status ? "Hello" : "Nut"}</p>
    </Box>
  );
};

export default Item;
