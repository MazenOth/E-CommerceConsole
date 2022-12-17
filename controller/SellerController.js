import { SellerService } from "../service/SellerService.js";

const sellerService = new SellerService();

export class SellerController {
  
  addProduct(productName, price, category) {
    productName = prompt("Please insert your new Product Name");
    sellerService.addProductName(productName);
    price = prompt("Please insert your new Product Price");
    sellerService.addProductPrice(price);
    category = prompt("Please insert your new Product Category");
    sellerService.addProductCategory(category);
  }

  updateProduct(productName, price, category) {
    productName = prompt("Please insert your new Product Name");
    sellerService.updateProductName(productName);
    price = prompt("Please insert your new Product Price");
    sellerService.updateProductPrice(price);
    category = prompt("Please insert your new Product Category");
    sellerService.updateProductCategory(category);
  }

  deleteProduct() {
    sellerService.deleteProduct();
  }
}
