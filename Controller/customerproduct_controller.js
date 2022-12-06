import { CustomerDatabase } from "../Model/Repos/customerdatabase.js";
import { CustomerProductService } from "../Service/customerproduct_service.js";

const customerDatabase = new CustomerDatabase();
const customerProductService = new CustomerProductService();

export class CustomerProductController {
  Features(productName, email, password, balance, input) {
    input = prompt(
      "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data"
    );

    if (input == 1) {
      customerProductService.ListProducts();
    }
    if (input == 2) {
      productName = prompt(
        "Please insert your product's name you want to buy:"
      );
      customerProductService.BuyProduct(productName);
    }
    if (input == 3) {
      input = prompt(
        "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
      );
      if (input == 1) {
        email = prompt(
          `Your previous mail is >> ${customerDatabase.getNewCustomer.getEmail} << please insert your new mail:`
        );
        customerProductService.EditAccountDataEmail(email);
      }
      if (input == 2) {
        password = prompt("please insert your old password:");
        customerProductService.EditAccountDataPassword(password);
      }
      if (input == 3) {
        balance = prompt(
          `Your old balance is >> ${customerDatabase.getNewCustomer.getBalance}LE << \nPlease insert your new balance:`
        );
        customerProductService.EditAccountDataBalance(balance);
      }
    }
  }
}
