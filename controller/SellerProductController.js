import { SellerProductService } from "../service/SellerProductService.js";

const sellerProductService = new SellerProductService();

// Naming is not right it should be SellerController
export class SellerProductController {
  // method doesn't follow the Single Responality principal. Make every method independent 
  features(productName, price, category, input) {
    input = prompt(
      // List Products is redundant, think how we could solve this issue. Hint: Making another class is fine
      "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
    );

    if (input == 1) {
      productName = prompt("Please insert your new Product Name");
      sellerProductService.addProductName(productName);
      price = prompt("Please insert your new Product Price");
      sellerProductService.addProductPrice(price);
      category = prompt("Please insert your new Product Category");
      sellerProductService.addProductCategory(category);
    }

    if (input == 2) {
      productName = prompt("Please insert your new Product Name");
      sellerProductService.updateProductName(productName);
      price = prompt("Please insert your new Product Price");
      sellerProductService.updateProductPrice(price);
      category = prompt("Please insert your new Product Category");
      sellerProductService.updateProductCategory(category);
    }

    if (input == 3) {
      sellerProductService.deleteProduct();
    }

    if (input == 4) {
      sellerProductService.listProducts();
    }
  }
}
