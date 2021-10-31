import { v4 as uuidv4 } from "uuid";

interface HotelDataType {
  id: string;
  roomId: string;
  maxPerson: number;
  status: boolean;
  bed: number;
  pricePerNight: number;
}

export const HotelData: HotelDataType[] = [
  {
    id: uuidv4(),
    roomId: "A100",
    maxPerson: 2,
    status: true,
    bed: 1,
    pricePerNight: 1000,
  },
];
