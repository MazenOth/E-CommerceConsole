import { Product } from "../Entities/product.js";
import { CustomerDatabase } from "./customerdatabase.js";

export class ProductDatabase extends CustomerDatabase {
  #testProduct = new Product("test", 50, "test");
  get getTestProduct() {
    return this.#testProduct;
  }

  #newProduct = new Product("product1", 50, "product1");
  get getNewProduct() {
    return this.#newProduct;
  }

  #products = [this.#testProduct];
  get getProducts() {
    return this.#products;
  }

  #addProduct() {
    this.#products.push(this.#newProduct);
  }
  CallAddProduct() {
    return this.#addProduct();
  }

  #updateProduct() {
    this.#products[0].setName = this.#testProduct.getName;
    this.#products[0].setPrice = this.#testProduct.getPrice;
    this.#products[0].setCategory = this.#testProduct.getCategory;
  }
  callUpdateProduct() {
    return this.#updateProduct();
  }

  #deleteProduct() {
    this.#products.pop();
  }
  callDeleteProduct() {
    return this.#deleteProduct();
  }

  #listProducts() {
    for (let i = 0; i < this.#products.length; i++) {
      console.log(this.#products[i]);
    }
  }
  callListProducts() {
    return this.#listProducts();
  }

  buyProduct(name) {
    for (let i = 0; i < this.#products.length; i++) {
      if (this.#products[i].getName == name) {
        var newBalance =
          this.getNewCustomer.getBalance - this.#products[i].getPrice;
        this.getNewCustomer.setBalance = newBalance;
        console.log(`Your new balance is ${newBalance}LE.`);
      } else {
        throw new Error("Please check your product's name!");
      }
    }
  }
}
