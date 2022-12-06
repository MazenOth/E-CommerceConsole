import { Seller } from "../Entities/seller.js";

export class SellerDatabase {
  #testSeller = new Seller("test@", 5555);
  get getTestSeller() {
    return this.#testSeller;
  }

  #newSeller = new Seller("user@", 1234);
  get getNewSeller() {
    return this.#newSeller;
  }

  #sellers = [this.#testSeller];
  get getSellers() {
    return this.#sellers;
  }

  #addNewSeller() {
    this.#sellers.push(this.#newSeller);
  }
  callAddNewSeller() {
    return this.#addNewSeller();
  }
}
