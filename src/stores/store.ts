import { makeObservable, action, observable } from "mobx";

interface productTypes {
  id: string;
  productName: string;
  price: number;
}

export class productsStoreImpl {
  product: productTypes[] = [];

  constructor() {
    makeObservable(this, {
      product: observable,
      addToCart: action,
    });
  }

  addToCart(item: productTypes) {
    const productItem = { ...item, quantity: 1 };
    this.product.push(productItem);
  }
}

export const productStore = new productsStoreImpl();
