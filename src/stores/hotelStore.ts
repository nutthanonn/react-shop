import { makeObservable, action, observable } from "mobx";

interface HoteStoreType {}

class HotelStoreImpl {
  // export
  Hotel: HoteStoreType[] = [];

  constructor() {
    makeObservable(this, {
      Hotel: observable,
      //method:action
    });
  }
  //action
}

export const HotelStore = new HotelStoreImpl();
