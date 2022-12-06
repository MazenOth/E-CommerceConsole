import { User } from "./user.js";

export class Customer extends User {
  #balance;
  constructor(email, password, balance) {
    super(email, password);
    this.#balance = Customer.#validateBalance(balance);
  }

  static #validateBalance(balance) {
    if (balance < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    return balance;
  }

  get getBalance() {
    return this.#balance;
  }
  set setBalance(balance) {
    if (balance < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    this.#balance = balance;
  }
}

