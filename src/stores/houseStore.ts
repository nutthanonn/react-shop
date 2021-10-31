import { makeObservable, action, observable } from "mobx";

interface HouseStoreType {}

class HouseStoreImpl {
  // export
  House: HouseStoreType[] = [];

  constructor() {
    makeObservable(this, {
      House: observable,
      //method:action
    });
  }
  //action
}

export const HouseStore = new HouseStoreImpl();
