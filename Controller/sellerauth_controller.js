import { SellerAuthService } from "../Service/sellerauth_service.js";

const sellerAuthService = new SellerAuthService();

export class SellerAuthController {
  
  SignIn(email, password) {
    email = prompt("Please insert your email");
    sellerAuthService.SignInEmail(email);
    password = prompt("Please insert your password");
    sellerAuthService.SignInPassword(password);
  }
  SignUp(email, password) {
    email = prompt("Please insert your new email");
    sellerAuthService.SignUpEmail(email);
    password = prompt("Please insert your new password");
    sellerAuthService.SignUpPassword(password);
  }
}
