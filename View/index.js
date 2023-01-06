import { UsersAuthController } from "../controller/UsersAuthController.js";
import { InputScanner } from "../util/InputScanner.js";

const inputScanner = new InputScanner();
const usersAuthController = new UsersAuthController();

var input = prompt("Please choose your role: \n 1- Customer \n 2- Seller");

// Customer
if (input == 1) {
  input = prompt(inputScanner.signPrompt());
  if (input == 1) {
    usersAuthController.signIn();
    input = prompt(inputScanner.customerPrompt());
    customerOptions(input);
  }
  if (input == 2) {
    usersAuthController.signUp();
    input = prompt(inputScanner.customerPrompt());
    customerOptions(input);
  }
}

// Seller
if (input == 2) {
  input = prompt(inputScanner.signPrompt());
  if (input == 1) {
    usersAuthController.signIn();
    input = prompt(inputScanner.sellerPrompt());
    sellerOptions(input);
  }
  if (input == 2) {
    usersAuthController.signUp();
    input = prompt(inputScanner.sellerPrompt());
    sellerOptions(input);
  }
}
