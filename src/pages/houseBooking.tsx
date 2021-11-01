import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  Container,
} from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { HotelData } from "../data/houseData";
import Item from "../components/houseBooking/item";

const HomeBooking: React.FC = () => {
  const [data, setData] = useState<any>(HotelData);
  const [checkButton, setCheckButton] = useState<boolean>(false); //

  useEffect(() => {
    if (checkButton) {
      const fill = data.filter((item: any) => {
        return item.status;
      });
      setData(fill);
    } else {
      setData(HotelData);
    }
  }, [checkButton, data]);

  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Booking</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 5,
        }}
      >
        <Box sx={{ width: 600 }}>
          <TextField
            label={<BiSearchAlt2 size="30" />}
            placeholder="search home No..."
            fullWidth
            color="primary"
          />
        </Box>
      </Box>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="status"
          onChange={() => setCheckButton(!checkButton)}
        />
      </FormGroup>
      <Container>
        <Grid container spacing={4}>
          {data.map((item: any) => {
            return (
              <Grid item key={item.id} md={4} xs={6}>
                <Item item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBooking;
