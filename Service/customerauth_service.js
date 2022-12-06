import { CustomerDatabase } from "../Model/Repos/customerdatabase.js";

const customerDatabase = new CustomerDatabase();

export class CustomerAuthService {
  SignInEmail(email) {
    for (let i = 0; i < customerDatabase.getCustomers.length; i++) {
      if (customerDatabase.getCustomers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
  }
  SignInPassword(password) {
    for (let i = 0; i < customerDatabase.getCustomers.length; i++) {
      if (customerDatabase.getCustomers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  SignUpEmail(email) {
    customerDatabase.getNewCustomer.setEmail = email;
  }
  SignUpPassword(password) {
    customerDatabase.getNewCustomer.setPassword = password;
  }
  SignUpBalance(balance) {
    customerDatabase.getNewCustomer.setBalance = balance;
    customerDatabase.callAddNewCustomer();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(customerDatabase.getNewCustomer);
  }
}
