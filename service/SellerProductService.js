import { ProductDatabase } from "../model/repos/productdatabase.js";

const productDatabase = new ProductDatabase();

export class SellerProductService {
  addProductName(productName) {
    productDatabase.getNewProduct.setName = productName;
  }
  addProductPrice(price) {
    productDatabase.getNewProduct.setPrice = price;
  }
  addProductCategory(category) {
    productDatabase.getNewProduct.setCategory = category;
    productDatabase.addProduct();
    console.log("You've Successfuly added new product, Check it out:");
    console.log(productDatabase.getNewProduct);
  }
  updateProductName(productName) {
    productDatabase.getTestProduct.setName = productName;
  }
  updateProductPrice(price) {
    productDatabase.getTestProduct.setPrice = price;
  }
  updateProductCategory(category) {
    productDatabase.getTestProduct.setCategory = category;
    productDatabase.updateProduct();
    console.log("You've Successfuly updated your product, Check it out now:");
    console.log(productDatabase.getTestProduct);
  }
  deleteProduct(input) {
    input = prompt(
      "Are you sure you wanna delete your product? \n 1-Yes \n 2-No"
    );
    if (input == 1) {
      productDatabase.deleteProduct();
      console.log("You've Successfuly deleted your product");
      if (productDatabase.getProducts.length == 0) {
        console.log("You don't have any products now :(");
      }
    } else {
      console.log("Nothing Deleted, Check your products:");
      console.log(productDatabase.getProducts[0]);
    }
  }
  listProducts() {
    console.log("Here are your products:");
    productDatabase.listProducts();
  }
}
