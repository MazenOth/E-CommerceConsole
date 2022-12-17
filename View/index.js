import { CustomerController } from "../controller/CustomerController.js";
import { SellerController } from "../controller/SellerController.js";
import { UsersAuthController } from "../controller/UsersAuthController.js";
import { ListProductsController } from "../controller/ListProductsController.js";

const customerController = new CustomerController();
const sellerController = new SellerController();
const usersAuthController = new UsersAuthController();
const listProductsController = new ListProductsController();

function signPrompt() {
  return "Please choose one of the following: \n 1- Signin \n 2- Signup";
}
function customerPrompt() {
  return "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data";
}
function customerOptions(input) {
  if (input == 1) {
    listProductsController.listProducts();
  }
  if (input == 2) {
    customerController.buyProduct();
  }
  if (input == 3) {
    customerController.editAccountData();
  }
}
function sellerPrompt() {
  return "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products";
}
function sellerOptions(input) {
  if (input == 1) {
    sellerController.addProduct();
  }
  if (input == 2) {
    sellerController.updateProduct();
  }
  if (input == 3) {
    sellerController.deleteProduct();
  }
  if (input == 4) {
    listProductsController.listProducts();
  }
}
var input = prompt("Please choose your role: \n 1- Customer \n 2- Seller");

// Customer
if (input == 1) {
  input = prompt(signPrompt());
  if (input == 1) {
    usersAuthController.signIn();
    input = prompt(customerPrompt());
    customerOptions(input);
  }
  if (input == 2) {
    usersAuthController.signUp();
    input = prompt(customerPrompt());
    customerOptions(input);
  }
}

// Seller
if (input == 2) {
  input = prompt(signPrompt());
  if (input == 1) {
    usersAuthController.signIn();
    input = prompt(sellerPrompt());
    sellerOptions(input);
  }
  if (input == 2) {
    usersAuthController.signUp();
    input = prompt(sellerPrompt());
    sellerOptions(input);
  }
}
