import { User } from "../Model/Entities/user.js";
import { UserDatabase } from "../Model/Repos/userdatabase.js";
import { Product } from "../Model/Entities/product.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";
import { Customer } from "../Model/Entities/customer.js";

const productDatabase = new ProductDatabase();
const userDatabase = new UserDatabase();

export class AuthorizationService {
  customerSignInEmail(email) {
    for (let i = 0; i < userDatabase.getCustomers.length; i++) {
      if (userDatabase.getCustomers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
  }
  customerSignInPassword(password) {
    for (let i = 0; i < userDatabase.getCustomers.length; i++) {
      if (userDatabase.getCustomers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  customerSignUpEmail(email) {
    userDatabase.getCustomer1.setEmail = email;
  }
  customerSignUpPassword(password) {
    userDatabase.getCustomer1.setPassword = password;
  }
  customerSignUpBalance(balance) {
    userDatabase.getCustomer1.setBalance = balance;
    userDatabase.callAddNewCustomer();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(userDatabase.getCustomer1);
  }
  adminSignInEmail(email) {
    for (let i = 0; i < userDatabase.getUsers.length; i++) {
      if (userDatabase.getUsers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
  }
  adminSignInPassword(password) {
    for (let i = 0; i < userDatabase.getUsers.length; i++) {
      if (userDatabase.getUsers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  adminSignUpEmail(email) {
    userDatabase.getUser1.setEmail = email;
  }
  adminSignUpPassword(password) {
    userDatabase.getUser1.setPassword = password;
    userDatabase.callAddNewUser();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(userDatabase.getUser1);
  }
}
