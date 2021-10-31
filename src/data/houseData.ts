import { v4 as uuidv4 } from "uuid";

interface pictureProps {
  picture1?: string;
  picture2?: string;
  picture3?: string;
}

interface HouseDataType {
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

export const HotelData: HouseDataType[] = [
  {
    id: uuidv4(),
    status: true,
    villageNo: "100/17",
    size: "medium",
    room: 1,
    bedRoom: 3,
    toilet: 2,
    price: 1000000,
    picture: {
      picture1:
        "https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441__340.jpg",
      picture2:
        "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg",
      picture3: "",
    },
  },
  {
    id: uuidv4(),
    status: true,
    villageNo: "100/17",
    size: "large",
    room: 12,
    bedRoom: 5,
    toilet: 5,
    price: 120000000,
    picture: {
      picture1:
        "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070__480.jpg",
      picture2:
        "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062__480.jpg",
      picture3: "",
    },
  },
  {
    id: uuidv4(),
    status: true,
    villageNo: "100/17",
    size: "small",
    room: 7,
    bedRoom: 3,
    toilet: 2,
    price: 5000000,
    picture: {
      picture1:
        "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__480.jpg",
      picture2:
        "https://cdn.pixabay.com/photo/2017/03/28/12/16/chairs-2181980__480.jpg",
      picture3:
        "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105__480.jpg",
    },
  },
  {
    id: uuidv4(),
    status: true,
    villageNo: "100/17",
    size: "medium",
    room: 6,
    bedRoom: 3,
    toilet: 2,
    price: 7000000,
    picture: {
      picture1:
        "https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800__480.jpg",
      picture2:
        "https://cdn.pixabay.com/photo/2015/06/08/15/20/rec-room-802017__480.jpg",
      picture3:
        "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__480.jpg",
    },
  },
  {
    id: uuidv4(),
    status: true,
    villageNo: "100/17",
    size: "small",
    room: 4,
    bedRoom: 2,
    toilet: 2,
    price: 2000000,
    picture: {
      picture1:
        "https://cdn.pixabay.com/photo/2016/07/26/18/30/kitchen-1543493__480.jpg",
      picture2:
        "https://cdn.pixabay.com/photo/2017/03/28/12/07/bricks-2181920__480.jpg",
      picture3: "",
    },
  },
];
