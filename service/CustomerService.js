import { ProductDatabase } from "../Model/Repos/productdatabase.js";
import { UsersDatabase } from "../Model/Repos/UsersDatabase.js";

const usersDatabase = new UsersDatabase();
const productDatabase = new ProductDatabase();

export class CustomerService {
  buyProduct(productName) {
    if (productDatabase.getProductPrice(productName) != null) {
      var newBalance =
        usersDatabase.getTestCustomer.getBalance -
        productDatabase.getProductPrice(productName);
      usersDatabase.getTestCustomer.setBalance = newBalance;
      console.log(`Your new balance is ${newBalance}LE.`);
    } else {
      throw new Error("Please check your product's name!");
    }
  }
  editAccountDataEmail(email) {
    usersDatabase.getTestCustomer.setEmail = email;
    console.log(
      `You've successfully updated your email! \nHere are your new data:`,
      usersDatabase.getTestCustomer
    );
  }
  editAccountDataPassword(password) {
    if (password == usersDatabase.getTestCustomer.getPassword) {
      usersDatabase.getTestCustomer.setPassword = password;
      console.log(
        `You've successfully updated your password! \nHere are your new data:`,
        usersDatabase.getTestCustomer
      );
    } else {
      throw new Error("Password incorrect, please try again!");
    }
  }
  editAccountDataBalance(balance) {
    usersDatabase.getTestCustomer.setBalance = balance;
    console.log(
      `You've successfully updated your balance! \nHere are your new data:`,
      usersDatabase.getTestCustomer
    );
  }
}
