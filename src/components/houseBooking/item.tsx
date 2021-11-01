import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Tooltip,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import Moment from "moment";
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
  const [colorState, setColorState] = useState<string>("#ef9a9a");
  useEffect(() => {
    if (item.status) {
      setColorState("#33bfff");
    }
  }, [setColorState, item.status]);

  return (
    <Box>
      <Card>
        <CardHeader
          avatar={
            <Tooltip title="seller" placement="top">
              <Avatar></Avatar>
            </Tooltip>
          }
          title="Nutthanon Thongcharoen"
          subheader={Moment().format("llll")}
        />

        <motion.div whileHover={{ opacity: 0.7 }}>
          <CardMedia
            image={item.picture?.picture1}
            component="img"
            height="200"
          />
        </motion.div>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{ borderRadius: "50%", bgcolor: colorState, opacity: 0.5 }}
            >
              <Typography sx={{ p: 1 }}>
                {item.status ? "booking" : "booked"}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6">HouseNo. : {item.villageNo}</Typography>
          <Typography sx={{ color: "gray" }}>
            {item.size} Size Have {item.room} Room and {item.bedRoom} bedRoom
            and {item.toilet} Toilet
          </Typography>
          <Typography>
            Price :{" "}
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Seemore</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
