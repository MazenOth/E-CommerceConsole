import { Product } from "../entities/Product.js";
import { CustomerDatabase } from "./customerdatabase.js";

export class ProductDatabase extends CustomerDatabase {
  #testProduct = new Product("test", 100, "test");
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

  addProduct() {
    this.#products.push(this.#newProduct);
  }

  updateProduct() {
    this.#products[0].setName = this.#testProduct.getName;
    this.#products[0].setPrice = this.#testProduct.getPrice;
    this.#products[0].setCategory = this.#testProduct.getCategory;
  }

  deleteProduct() {
    this.#products.pop();
  }

  listProducts() {
    for (let i = 0; i < this.#products.length; i++) {
      console.log(this.#products[i]);
    }
  }

  getProductPrice(name) {
    for (let i = 0; i < this.#products.length; i++) {
      if (this.#products[i].getName == name) {
        return this.#products[i].getPrice;
      } else {
        return null;
      }
    }
  }
}
