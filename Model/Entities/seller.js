import { ApplicationUser } from "./ApplicationUser.js";

export class Seller extends ApplicationUser {
  constructor(email, password) {
    super(email, password);
  }
}
