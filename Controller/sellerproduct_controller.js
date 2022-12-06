import { SellerProductService } from "../Service/sellerproduct_service.js";

const sellerProductService = new SellerProductService();

export class SellerProductController {
  Features(productName, price, category, input) {
    input = prompt(
      "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
    );

    if (input == 1) {
      productName = prompt("Please insert your new Product Name");
      sellerProductService.AddProductName(productName);
      price = prompt("Please insert your new Product Price");
      sellerProductService.AddProductPrice(price);
      category = prompt("Please insert your new Product Category");
      sellerProductService.AddProductCategory(category);
    }

    if (input == 2) {
      productName = prompt("Please insert your new Product Name");
      sellerProductService.UpdateProductName(productName);
      price = prompt("Please insert your new Product Price");
      sellerProductService.UpdateProductPrice(price);
      category = prompt("Please insert your new Product Category");
      sellerProductService.UpdateProductCategory(category);
    }

    if (input == 3) {
      sellerProductService.DeleteProduct();
    }

    if (input == 4) {
      sellerProductService.ListProducts();
    }
  }
}
