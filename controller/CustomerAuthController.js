import { CustomerAuthService } from "../service/CustomerAuthService.js";

const customerAuthService = new CustomerAuthService();

export class CustomerAuthController {
  // sign in should be the same in seller or customer ... the 2 methods are redundant
  signIn(email, password) {
    email = prompt("Please insert your email");
    customerAuthService.signInEmail(email);
    password = prompt("Please insert your password");
    customerAuthService.signInPassword(password);
  }
  // After changing the new design to one user with different role, sign up will be redundant as well.
  signUp(email, password, balance) {
    email = prompt("Please insert your new email");
    customerAuthService.signUpEmail(email);
    password = prompt("Please insert your new password");
    customerAuthService.signUpPassword(password);
    balance = prompt("Please insert your balance");
    customerAuthService.signUpBalance(balance);
  }
}
