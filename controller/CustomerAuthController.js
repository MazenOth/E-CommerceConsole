import { CustomerAuthService } from "../service/CustomerAuthService.js";

const customerAuthService = new CustomerAuthService();

export class CustomerAuthController {
  signIn(email, password) {
    email = prompt("Please insert your email");
    customerAuthService.signInEmail(email);
    password = prompt("Please insert your password");
    customerAuthService.signInPassword(password);
  }
  signUp(email, password, balance) {
    email = prompt("Please insert your new email");
    customerAuthService.signUpEmail(email);
    password = prompt("Please insert your new password");
    customerAuthService.signUpPassword(password);
    balance = prompt("Please insert your balance");
    customerAuthService.signUpBalance(balance);
  }
}
