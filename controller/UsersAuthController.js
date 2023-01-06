import { UsersAuthService } from "../service/UsersAuthService.js";
import { InputScanner } from "../util/InputScanner.js";

const usersAuthService = new UsersAuthService();
const inputScanner = new InputScanner();

export class UsersAuthController {
  signIn() {
    usersAuthService.signIn(inputScanner.email(), inputScanner.password());
  }

  signUp() {
    usersAuthService.signUp(
      inputScanner.email(),
      inputScanner.password(),
      inputScanner.role()
    );
    if (role == "customer") {
      usersAuthService.signUpBalance(inputScanner.balance());
      usersAuthService.showNewUser();
    } else if (role == "seller") {
      usersAuthService.showNewUser();
    } else {
      throw new Error(`Please inseret right role ("customer" or "seller")`);
    }
  }
}
