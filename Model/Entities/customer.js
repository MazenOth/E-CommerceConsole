import { User } from "./user.js";

export class Customer extends User {
  #balance;
  constructor(email, password, balance) {
    super(email, password);
    this.#balance = Customer.#validateBalance(balance);
  }

  static #validateBalance(value) {
    if (value < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    return value;
  }

  get getBalance() {
    return this.#balance;
  }
  set setBalance(value) {
    if (value < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    this.#balance = value;
  }
}
