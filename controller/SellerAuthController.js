import { SellerAuthService } from "../Service/SellerAuthService.js";

const sellerAuthService = new SellerAuthService();

export class SellerAuthController {
  // sign in should be the same in seller or customer ... the 2 methods are redundant
  signIn(email, password) {
    email = prompt("Please insert your email");
    sellerAuthService.signInEmail(email);
    password = prompt("Please insert your password");
    sellerAuthService.signInPassword(password);
  }
   // After changing the new design to one user with different role, sign up will be redundant as well.
  signUp(email, password) {
    email = prompt("Please insert your new email");
    sellerAuthService.signUpEmail(email);
    password = prompt("Please insert your new password");
    sellerAuthService.signUpPassword(password);
  }
}
