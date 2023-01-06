import { CustomerController } from "../controller/CustomerController.js";
import { SellerController } from "../controller/SellerController.js";

const customerController = new CustomerController();
const sellerController = new SellerController();

export class InputScanner {
  productName() {
    var productName = prompt("Please insert your product's name:");
    return productName;
  }
  email() {
    var email = prompt("Please insert your email:");
    return email;
  }
  password() {
    var password = prompt("Please insert your password:");
    return password;
  }
  balance() {
    var balance = prompt("Please insert your balance:");
    return balance;
  }
  price() {
    var price = prompt("Please insert your Product Price:");
    return price;
  }
  category() {
    var category = prompt("Please insert your Product category:");
    return category;
  }
  role() {
    var role = prompt("Please insert your role:");
    return role;
  }
  input() {
    var input = prompt(
      "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
    );
    return input;
  }

  signPrompt() {
    return "Please choose one of the following: \n 1- Signin \n 2- Signup";
  }

  customerPrompt() {
    return "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data";
  }

  customerOptions(input) {
    if (input == 1) {
      customerController.listProducts();
    } else if (input == 2) {
      customerController.buyProduct();
    } else if (input == 3) {
      customerController.editAccountData();
    }
  }

  sellerPrompt() {
    return "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products";
  }

  sellerOptions(input) {
    if (input == 1) {
      sellerController.addProduct();
    } else if (input == 2) {
      sellerController.updateProduct();
    } else if (input == 3) {
      sellerController.deleteProduct();
    } else if (input == 4) {
      sellerController.listProducts();
    }
  }
}
