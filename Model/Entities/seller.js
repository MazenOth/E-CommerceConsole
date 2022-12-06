import { User } from "./user.js";

export class Seller extends User {
  constructor(email, password) {
    super(email, password);
  }
}
