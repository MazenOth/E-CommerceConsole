import { Customer } from "../Entities/customer.js";

export class CustomerDatabase {
  #testCustomer = new Customer("test@", 5555, 5000);
  get getTestCustomer() {
    return this.#testCustomer;
  }

  #newCustomer = new Customer("user@", 1234, 2000);
  get getNewCustomer() {
    return this.#newCustomer;
  }

  #customers = [this.#testCustomer];
  get getCustomers() {
    return this.#customers;
  }

  #addNewCustomer() {
    this.#customers.push(this.#newCustomer);
  }
  callAddNewCustomer() {
    return this.#addNewCustomer();
  }
}
