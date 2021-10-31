import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { HotelData } from "../data/houseData";
import Item from "../components/houseBooking/item";

const HomeBooking: React.FC = () => {
  const [state, setState] = useState<string>(""); // regular expression fillter-data

  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Booking</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 5, border: 1 }}>
        <Box sx={{ width: 600 }}>
          <TextField
            label={<BiSearchAlt2 size="30" />}
            placeholder="search..."
            fullWidth
            color="primary"
            onChange={(e) => setState(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBooking;
