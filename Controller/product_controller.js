import { User } from "../Model/Entities/user.js";
import { UserDatabase } from "../Model/Repos/userdatabase.js";
import { Product } from "../Model/Entities/product.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";
import { Customer } from "../Model/Entities/customer.js";
import { ProductService } from "../Service/product_service.js";

const userDatabase = new UserDatabase();
const productService = new ProductService();

export class ProductController {
  customerFeatures(productName, email, password, balance, input) {
    input = prompt(
      "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data"
    );

    if (input == 1) {
      productService.customerFeaturesListProducts();
    }
    if (input == 2) {
      productName = prompt(
        "Please insert your product's name you want to buy:"
      );
      productService.customerFeaturesBuyProduct(productName);
    }
    if (input == 3) {
      input = prompt(
        "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
      );
      if (input == 1) {
        email = prompt(
          `Your previous mail is >> ${userDatabase.getCustomer1.getEmail} << please insert your new mail:`
        );
        productService.customerFeaturesEditAccountDataEmail(email);
      }
      if (input == 2) {
        password = prompt("please insert your old password:");
        productService.customerFeaturesEditAccountDataPassword(password);
      }
      if (input == 3) {
        balance = prompt(
          `Your old balance is >> ${userDatabase.getCustomer1.getBalance}LE << \nPlease insert your new balance:`
        );
        productService.customerFeaturesEditAccountDataBalance(balance);
      }
    }
  }
  adminFeatures(productName, price, category, input) {
    input = prompt(
      "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
    );

    if (input == 1) {
      productName = prompt("Please insert your new Product Name");
      productService.adminFeaturesAddProductName(productName);
      price = prompt("Please insert your new Product Price");
      productService.adminFeaturesAddProductPrice(price);
      category = prompt("Please insert your new Product Category");
      productService.adminFeaturesAddProductCategory(category);
    }

    if (input == 2) {
      productName = prompt("Please insert your new Product Name");
      productService.adminFeaturesUpdateProductName(productName);
      price = prompt("Please insert your new Product Price");
      productService.adminFeaturesUpdateProductPrice(price);
      category = prompt("Please insert your new Product Category");
      productService.adminFeaturesUpdateProductCategory(category);
    }

    if (input == 3) {
      productService.adminFeaturesDeleteProduct();
    }

    if (input == 4) {
      productService.adminFeaturesListProducts();
    }
  }
}
