import { SellerService } from "../service/SellerService.js";
import { InputScanner } from "../util/InputScanner.js";
import { ProductController } from "../controller/ProductController.js";

const inputScanner = new InputScanner();
const sellerService = new SellerService();
const productController = new ProductController();

export class SellerController {
  addProduct() {
    sellerService.addProductName(inputScanner.productName());
    sellerService.addProductPrice(inputScanner.price());
    sellerService.addProductCategory(inputScanner.category());
  }

  updateProduct() {
    sellerService.updateProductName(inputScanner.productName());
    sellerService.updateProductPrice(inputScanner.price());
    sellerService.updateProductCategory(inputScanner.category());
  }

  deleteProduct() {
    sellerService.deleteProduct();
  }

  listProducts() {
    productController.listProducts();
  }
}
