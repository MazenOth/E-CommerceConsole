import { ProductDatabase } from "../Model/Repos/productdatabase.js";

const productDatabase = new ProductDatabase();

export class SellerProductService {
  AddProductName(productName) {
    productDatabase.getNewProduct.setName = productName;
  }
  AddProductPrice(price) {
    productDatabase.getNewProduct.setPrice = price;
  }
  AddProductCategory(category) {
    productDatabase.getNewProduct.setCategory = category;
    productDatabase.CallAddProduct();
    console.log("You've Successfuly added new product, Check it out:");
    console.log(productDatabase.getNewProduct);
  }
  UpdateProductName(productName) {
    productDatabase.getTestProduct.setName = productName;
  }
  UpdateProductPrice(price) {
    productDatabase.getTestProduct.setPrice = price;
  }
  UpdateProductCategory(category) {
    productDatabase.getTestProduct.setCategory = category;
    productDatabase.callUpdateProduct();
    console.log("You've Successfuly updated your product, Check it out now:");
    console.log(productDatabase.getTestProduct);
  }
  DeleteProduct(input) {
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
  ListProducts() {
    console.log("Here are your products:");
    productDatabase.callListProducts();
  }
}
