import { SellerAuthService } from "../Service/SellerAuthService.js";

const sellerAuthService = new SellerAuthService();

export class SellerAuthController {
  
  signIn(email, password) {
    email = prompt("Please insert your email");
    sellerAuthService.signInEmail(email);
    password = prompt("Please insert your password");
    sellerAuthService.signInPassword(password);
  }
  signUp(email, password) {
    email = prompt("Please insert your new email");
    sellerAuthService.signUpEmail(email);
    password = prompt("Please insert your new password");
    sellerAuthService.signUpPassword(password);
  }
}
