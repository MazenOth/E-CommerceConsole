import { UsersAuthService } from "../service/UsersAuthService.js";

const usersAuthService = new UsersAuthService();

export class UsersAuthController {
  signIn(email, password) {
    email = prompt("Please insert your email");
    password = prompt("Please insert your password");
    usersAuthService.signIn(email, password);
  }

  signUp(email, password, role, balance) {
    email = prompt("Please insert your new email");
    password = prompt("Please insert your new password");
    role = prompt("Please insert your role for certinity");
    usersAuthService.signUp(email, password, role);
    if (role == "customer") {
      balance = prompt("Please insert your balance");
      usersAuthService.signUpBalance(balance);
      usersAuthService.showNewUser();
    } else if (role == "seller") {
      usersAuthService.showNewUser();
    } else {
      throw new Error(`Please inseret right role ("customer" or "seller")`)
    }
  }
}
