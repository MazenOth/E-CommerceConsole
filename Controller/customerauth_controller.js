import { CustomerAuthService } from "../Service/customerauth_service.js";

const customerAuthService = new CustomerAuthService();

export class CustomerAuthController {
  SignIn(email, password) {
    email = prompt("Please insert your email");
    customerAuthService.SignInEmail(email);
    password = prompt("Please insert your password");
    customerAuthService.SignInPassword(password);
  }
  SignUp(email, password, balance) {
    email = prompt("Please insert your new email");
    customerAuthService.SignUpEmail(email);
    password = prompt("Please insert your new password");
    customerAuthService.SignUpPassword(password);
    balance = prompt("Please insert your balance");
    customerAuthService.SignUpBalance(balance);
  }
}
