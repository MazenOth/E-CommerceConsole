import { User } from "../Model/Entities/user.js";
import { UserDatabase } from "../Model/Repos/userdatabase.js";
import { Product } from "../Model/Entities/product.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";
import { Customer } from "../Model/Entities/customer.js";
import { Service } from "../Service/service.js";

const userDatabase = new UserDatabase();
const service = new Service();

export class Controller {
  customerSignIn(email, password) {
    email = prompt("Please insert your email");
    service.customerSignInEmail(email);
    password = prompt("Please insert your password");
    service.customerSignInPassword(password);
  }
  customerSignUp(email, password, balance) {
    email = prompt("Please insert your new email");
    service.customerSignUpEmail(email);
    password = prompt("Please insert your new password");
    service.customerSignUpPassword(password);
    balance = prompt("Please insert your balance");
    service.customerSignUpBalance(balance);
  }
  customerFeatures(productName, email, password, balance, input) {
    input = prompt(
      "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data"
    );

    if (input == 1) {
      service.customerFeaturesListProducts();
    }
    if (input == 2) {
      productName = prompt(
        "Please insert your product's name you want to buy:"
      );
      service.customerFeaturesBuyProduct(productName);
    }
    if (input == 3) {
      input = prompt(
        "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
      );
      if (input == 1) {
        email = prompt(
          `Your previous mail is >> ${userDatabase.getCustomer1.getEmail} << please insert your new mail:`
        );
        service.customerFeaturesEditAccountDataEmail(email);
      }
      if (input == 2) {
        password = prompt("please insert your old password:");
        service.customerFeaturesEditAccountDataPassword(password);
      }
      if (input == 3) {
        balance = prompt(
          `Your old balance is >> ${userDatabase.getCustomer1.getBalance}LE << \nPlease insert your new balance:`
        );
        service.customerFeaturesEditAccountDataBalance(balance);
      }
    }
  }

  adminSignIn(email, password) {
    email = prompt("Please insert your email");
    service.adminSignInEmail(email);
    password = prompt("Please insert your password");
    service.adminSignInPassword(password);
  }
  adminSignUp(email, password) {
    email = prompt("Please insert your new email");
    service.adminSignUpEmail(email);
    password = prompt("Please insert your new password");
    service.adminSignUpPassword(password);
  }
  adminFeatures(productName, price, category, input) {
    input = prompt(
      "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
    );

    if (input == 1) {
      productName = prompt("Please insert your new Product Name");
      service.adminFeaturesAddProductName(productName);
      price = prompt("Please insert your new Product Price");
      service.adminFeaturesAddProductPrice(price);
      category = prompt("Please insert your new Product Category");
      service.adminFeaturesAddProductCategory(category);
    }

    if (input == 2) {
      productName = prompt("Please insert your new Product Name");
      service.adminFeaturesUpdateProductName(productName);
      price = prompt("Please insert your new Product Price");
      service.adminFeaturesUpdateProductPrice(price);
      category = prompt("Please insert your new Product Category");
      service.adminFeaturesUpdateProductCategory(category);
    }

    if (input == 3) {
      service.adminFeaturesDeleteProduct();
    }

    if (input == 4) {
      service.adminFeaturesListProducts();
    }
  }
}
