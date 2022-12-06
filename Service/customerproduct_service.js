import { CustomerDatabase } from "../Model/Repos/customerdatabase.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";

const productDatabase = new ProductDatabase();
const customerDatabase = new CustomerDatabase();

export class CustomerProductService {
  ListProducts() {
    console.log("Here are your products:");
    productDatabase.callListProducts();
  }
  BuyProduct(productName) {
    productDatabase.buyProduct(productName);
  }
  EditAccountDataEmail(email) {
    customerDatabase.getNewCustomer.setEmail = email;
    console.log(
      `You've successfully updated your email! \nHere are your new data:`,
      customerDatabase.getNewCustomer
    );
  }
  EditAccountDataPassword(password) {
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
  EditAccountDataBalance(balance) {
    customerDatabase.getNewCustomer.setBalance = balance;
    console.log(
      `You've successfully updated your balance! \nHere are your new data:`,
      customerDatabase.getNewCustomer
    );
  }
}
