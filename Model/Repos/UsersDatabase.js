import { ApplicationUser } from "../entities/ApplicationUser.js";

export class UsersDatabase {
  #testCustomer = new ApplicationUser("customer@", 5555, "customer", 5000);
  get getTestCustomer() {
    return this.#testCustomer;
  }

  #newUser = new ApplicationUser();
  get getNewUser() {
    return this.#newUser;
  }

  #testSeller = new ApplicationUser("seller@", 5555, "seller");
  get getTestSeller() {
    return this.#testSeller;
  }

  #users = [this.#testCustomer, this.#testSeller];
  get getUsers() {
    return this.#users;
  }

  addNewUser() {
    this.#users.push(this.#newUser);
  }
}
