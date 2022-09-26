import { User } from "../Model/Entities/user.js";
import { UserDatabase } from "../Model/Repos/userdatabase.js";
import { Product } from "../Model/Entities/product.js";
import { ProductDatabase } from "../Model/Repos/productdatabase.js";
import { Customer } from "../Model/Entities/customer.js";

const productDatabase = new ProductDatabase();
const userDatabase = new UserDatabase();

export class ProductService {
  customerFeaturesListProducts() {
    console.log("Here are your products:");
    productDatabase.callListProducts();
  }
  customerFeaturesBuyProduct(productName) {
    productDatabase.buyProduct(productName);
  }
  customerFeaturesEditAccountDataEmail(email) {
    userDatabase.getCustomer1.setEmail = email;
    console.log(
      `You've successfully updated your email! \nHere are your new data:`,
      userDatabase.getCustomer1
    );
  }
  customerFeaturesEditAccountDataPassword(password) {
    if (password == userDatabase.getCustomer1.getPassword) {
      userDatabase.getCustomer1.setPassword = password;
      console.log(
        `You've successfully updated your password! \nHere are your new data:`,
        userDatabase.getCustomer1
      );
    } else {
      throw new Error("Password incorrect, please try again!");
    }
  }
  customerFeaturesEditAccountDataBalance(balance) {
    userDatabase.getCustomer1.setBalance = balance;
    console.log(
      `You've successfully updated your balance! \nHere are your new data:`,
      userDatabase.getCustomer1
    );
  }

  adminFeaturesAddProductName(productName) {
    productDatabase.getProduct1.setName = productName;
  }
  adminFeaturesAddProductPrice(price) {
    productDatabase.getProduct1.setPrice = price;
  }
  adminFeaturesAddProductCategory(category) {
    productDatabase.getProduct1.setCategory = category;
    productDatabase.CallAddProduct();
    console.log("You've Successfuly added new product, Check it out:");
    console.log(productDatabase.getProduct1);
  }
  adminFeaturesUpdateProductName(productName) {
    productDatabase.getTestProduct.setName = productName;
  }
  adminFeaturesUpdateProductPrice(price) {
    productDatabase.getTestProduct.setPrice = price;
  }
  adminFeaturesUpdateProductCategory(category) {
    productDatabase.getTestProduct.setCategory = category;
    productDatabase.callUpdateProduct();
    console.log("You've Successfuly updated your product, Check it out now:");
    console.log(productDatabase.getTestProduct);
  }
  adminFeaturesDeleteProduct(input) {
    input = prompt(
      "Are you sure you wanna delete your product? \n 1-Yes \n 2-No"
    );
    if (input == 1) {
      productDatabase.callDeleteProduct();
      console.log("You've Successfuly deleted your product");
      if (productDatabase.getProducts.length == 0) {
        console.log("You don't have any products now :(");
      }
    } else {
      console.log("Nothing Deleted, Check your products:");
      console.log(productDatabase.getProducts[0]);
    }
  }
  adminFeaturesListProducts() {
    console.log("Here are your products:");
    productDatabase.callListProducts();
  }
}
