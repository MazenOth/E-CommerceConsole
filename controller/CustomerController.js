import { CustomerService } from "../service/CustomerService.js";
import { UsersDatabase } from "../Model/Repos/UsersDatabase.js";

const usersDatabase = new UsersDatabase();
const customerService = new CustomerService();

export class CustomerController {
  buyProduct(productName) {
    productName = prompt("Please insert your product's name you want to buy:");
    customerService.buyProduct(productName);
  }

  editAccountData(email, password, balance, input) {
    input = prompt(
      "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
    );
    if (input == 1) {
      email = prompt(
        `Your previous mail is >> ${usersDatabase.getTestCustomer.getEmail} << please insert your new mail:`
      );
      customerService.editAccountDataEmail(email);
    }
    if (input == 2) {
      password = prompt("please insert your old password:");
      customerService.editAccountDataPassword(password);
    }
    if (input == 3) {
      balance = prompt(
        `Your old balance is >> ${usersDatabase.getTestCustomer.getBalance}LE << \nPlease insert your new balance:`
      );
      customerService.editAccountDataBalance(balance);
    }
  }
}
