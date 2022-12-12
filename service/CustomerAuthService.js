import { CustomerDatabase } from "../model/repos/CustomerDatabase.js";

const customerDatabase = new CustomerDatabase();

export class CustomerAuthService {
  signInEmail(email) {
    for (let i = 0; i < customerDatabase.getCustomers.length; i++) {
      if (customerDatabase.getCustomers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
  }
  signInPassword(password) {
    for (let i = 0; i < customerDatabase.getCustomers.length; i++) {
      if (customerDatabase.getCustomers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  signUpEmail(email) {
    customerDatabase.getNewCustomer.setEmail = email;
  }
  signUpPassword(password) {
    customerDatabase.getNewCustomer.setPassword = password;
  }
  signUpBalance(balance) {
    customerDatabase.getNewCustomer.setBalance = balance;
    customerDatabase.addNewCustomer();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(customerDatabase.getNewCustomer);
  }
}
