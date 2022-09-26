import { AuthorizationController } from "../Controller/authorization_controller.js";
import { ProductController } from "../Controller/product_controller.js";


const authorizationController = new AuthorizationController();
const productController = new ProductController();


var input = prompt("Please choose your role: \n 1- Customer \n 2- Admin");

//Customer
if (input == 1) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    authorizationController.customerSignIn();
    productController.customerFeatures();
  }
  if (input == 2) {
    authorizationController.customerSignUp();
    productController.customerFeatures();
  }
}

//Admin
if (input == 2) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    authorizationController.adminSignIn();
    productController.adminFeatures();
  }
  if (input == 2) {
    authorizationController.adminSignUp();
    productController.adminFeatures();
  }
}
