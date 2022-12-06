import { CustomerAuthController } from "../Controller/customerauth_controller.js";
import { CustomerProductController } from "../Controller/customerproduct_controller.js";
import { SellerAuthController } from "../Controller/sellerauth_controller.js";
import { SellerProductController } from "../Controller/sellerproduct_controller.js";

const customerAuthController = new CustomerAuthController();
const customerProductController = new CustomerProductController();
const sellerAuthController = new SellerAuthController();
const sellerProductController = new SellerProductController();


var input = prompt("Please choose your role: \n 1- Customer \n 2- Seller");

//Customer
if (input == 1) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    customerAuthController.SignIn();
    customerProductController.Features();
  }
  if (input == 2) {
    customerAuthController.SignUp();
    customerProductController.Features();
  }
}

//Admin
if (input == 2) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    sellerAuthController.SignIn();
    sellerProductController.Features();
  }
  if (input == 2) {
    sellerAuthController.SignUp();
    sellerProductController.Features();
  }
}
