import { AuthorizationService } from "../Service/authorization_service.js";

const authorizationService = new AuthorizationService();

export class AuthorizationController {
  customerSignIn(email, password) {
    email = prompt("Please insert your email");
    authorizationService.customerSignInEmail(email);
    password = prompt("Please insert your password");
    authorizationService.customerSignInPassword(password);
  }
  customerSignUp(email, password, balance) {
    email = prompt("Please insert your new email");
    authorizationService.customerSignUpEmail(email);
    password = prompt("Please insert your new password");
    authorizationService.customerSignUpPassword(password);
    balance = prompt("Please insert your balance");
    authorizationService.customerSignUpBalance(balance);
  }
  adminSignIn(email, password) {
    email = prompt("Please insert your email");
    authorizationService.adminSignInEmail(email);
    password = prompt("Please insert your password");
    authorizationService.adminSignInPassword(password);
  }
  adminSignUp(email, password) {
    email = prompt("Please insert your new email");
    authorizationService.adminSignUpEmail(email);
    password = prompt("Please insert your new password");
    authorizationService.adminSignUpPassword(password);
  }
}
