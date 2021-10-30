interface ProduceType {
  id: string;
  productName: string;
  picture: string;
  price: number;
}

export const productData: ProduceType[] = [
  {
    id: "A01",
    productName: "Apple",
    picture:
      "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261__480.jpg",
    price: 30,
  },
  {
    id: "A02",
    productName: "strawberry",
    picture:
      "https://cdn.pixabay.com/photo/2021/09/23/05/30/strawberry-6648685__480.jpg",
    price: 440,
  },
  {
    id: "A03",
    productName: "Orange",
    picture:
      "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__480.jpg",
    price: 20,
  },
  {
    id: "A04",
    productName: "Cherry",
    picture:
      "https://cdn.pixabay.com/photo/2014/12/21/23/34/cherry-575547__480.png",
    price: 50,
  },
  {
    id: "A05",
    productName: "Banana",
    picture:
      "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790__480.jpg",
    price: 20,
  },
  {
    id: "A06",
    productName: "Lemon",
    picture:
      "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091__480.jpg",
    price: 10,
  },
];
