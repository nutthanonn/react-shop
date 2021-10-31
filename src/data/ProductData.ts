import { v4 as uuidv4 } from "uuid";

interface ProduceType {
  id: string;
  productName: string;
  picture: string;
  price: number;
}

export const productData: ProduceType[] = [
  {
    id: uuidv4(),
    productName: "Apple",
    picture:
      "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261__480.jpg",
    price: 30,
  },
  {
    id: uuidv4(),
    productName: "strawberry",
    picture:
      "https://cdn.pixabay.com/photo/2021/09/23/05/30/strawberry-6648685__480.jpg",
    price: 440,
  },
  {
    id: uuidv4(),
    productName: "Orange",
    picture:
      "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__480.jpg",
    price: 20,
  },
  {
    id: uuidv4(),
    productName: "Cherry",
    picture:
      "https://cdn.pixabay.com/photo/2017/06/14/15/18/cherries-2402449_1280.jpg",
    price: 50,
  },
  {
    id: uuidv4(),
    productName: "Banana",
    picture:
      "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790__480.jpg",
    price: 20,
  },
  {
    id: uuidv4(),
    productName: "Lemon",
    picture:
      "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091__480.jpg",
    price: 10,
  },
];
