import { Product } from "../Entities/product.js";
import { UserDatabase } from "./userdatabase.js";

export class ProductDatabase extends UserDatabase {
  #testProduct = new Product("test", 50, "test");
  get getTestProduct() {
    return this.#testProduct;
  }

  #product1 = new Product("product1", 50, "product1");
  get getProduct1() {
    return this.#product1;
  }

  #products = [this.#testProduct];
  get getProducts() {
    return this.#products;
  }

  #addProduct() {
    this.#products.push(this.#product1);
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
    // console.log(this.getProducts[0].getName);
    for (let i = 0; i < this.#products.length; i++) {
      if (this.#products[i].getName == name) {
        var newBalance = this.getCustomer1.getBalance - this.#products[i].getPrice;
        this.getCustomer1.setBalance = newBalance;
        console.log(`Your new balance is ${newBalance}LE.`);
      } else {
        throw new Error("Please check your product's name!");
      }
    }
  }
}
