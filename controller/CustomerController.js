import { CustomerService } from "../service/CustomerService.js";
import { InputScanner } from "../util/InputScanner.js";
import { ProductController } from "../controller/ProductController.js";

const customerService = new CustomerService();
const inputScanner = new InputScanner();
const productController = new ProductController();

export class CustomerController {
  buyProduct() {
    customerService.buyProduct(inputScanner.productName());
  }

  editAccountData() {
    if (inputScanner.input() == 1) {
      customerService.editAccountDataEmail(inputScanner.email());
    }
    if (input == 2) {
      customerService.editAccountDataPassword(inputScanner.password());
    }
    if (input == 3) {
      customerService.editAccountDataBalance(inputScanner.balance());
    }
  }

  listProducts() {
    productController.listProducts();
  }
}
