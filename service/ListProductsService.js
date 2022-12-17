import { ProductDatabase } from "../model/repos/productdatabase.js";

const productDatabase = new ProductDatabase();

export class ListProductsService {
  listProducts() {
    console.log("Here are your products:");
    productDatabase.listProducts();
  }
}
