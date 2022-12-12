import { CustomerAuthController } from "../controller/CustomerAuthController.js";
import { CustomerProductController } from "../controller/CustomerProductController.js";
import { SellerAuthController } from "../controller/SellerAuthController.js";
import { SellerProductController } from "../controller/SellerProductController.js";

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
    customerAuthController.signIn();
    customerProductController.features();
  }
  if (input == 2) {
    customerAuthController.signUp();
    customerProductController.features();
  }
}

//Admin
if (input == 2) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    sellerAuthController.signIn();
    sellerProductController.features();
  }
  if (input == 2) {
    sellerAuthController.signUp();
    sellerProductController.features();
  }
}
