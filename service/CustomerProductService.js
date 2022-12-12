import { CustomerDatabase } from "../Model/Repos/customerdatabase.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";

const productDatabase = new ProductDatabase();
const customerDatabase = new CustomerDatabase();

export class CustomerProductService {
  listProducts() {
    console.log("Here are your products:");
    productDatabase.listProducts();
  }
  buyProduct(productName) {
    if (productDatabase.getProductPrice(productName) != null) {
      var newBalance =
        customerDatabase.getNewCustomer.getBalance - productDatabase.getProductPrice(productName);
      customerDatabase.getNewCustomer.setBalance = newBalance;
      console.log(`Your new balance is ${newBalance}LE.`);
    } else {
      throw new Error("Please check your product's name!");
    }
  }
  editAccountDataEmail(email) {
    customerDatabase.getNewCustomer.setEmail = email;
    console.log(
      `You've successfully updated your email! \nHere are your new data:`,
      customerDatabase.getNewCustomer
    );
  }
  editAccountDataPassword(password) {
    if (password == customerDatabase.getNewCustomer.getPassword) {
      customerDatabase.getNewCustomer.setPassword = password;
      console.log(
        `You've successfully updated your password! \nHere are your new data:`,
        customerDatabase.getNewCustomer
      );
    } else {
      throw new Error("Password incorrect, please try again!");
    }
  }
  editAccountDataBalance(balance) {
    customerDatabase.getNewCustomer.setBalance = balance;
    console.log(
      `You've successfully updated your balance! \nHere are your new data:`,
      customerDatabase.getNewCustomer
    );
  }
}
