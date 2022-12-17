import { ListProductsService } from "../service/ListProductsService.js";

const listProductsService = new ListProductsService();

export class ListProductsController {
  listProducts() {
    listProductsService.listProducts();
  }
}
