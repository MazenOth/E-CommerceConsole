class Product {
  #name;
  #price;
  #category;

  constructor(name, price, category) {
    this.#name = Product.#validateName(name);
    this.#price = Product.#validatePrice(price);
    this.#category = Product.#validateCategory(category);
  }

  static #validateName(name) {
    if (name === "") {
      throw new Error("You cannot enter empty product name!");
    }
    return name;
  }
  static #validatePrice(price) {
    if (price <= 0) {
      throw new Error("Your price should be bigger than 0!");
    }
    return price;
  }
  static #validateCategory(category) {
    if (category === "") {
      throw new Error("You cannot enter empty category!");
    }
    return category;
  }

  get getName() {
    return this.#name;
  }
  set setName(name) {
    if (name === "") {
      throw new Error("You cannot enter empty product name!");
    }
    this.#name = name;
  }

  get getPrice() {
    return this.#price;
  }
  set setPrice(price) {
    if (price <= 0) {
      throw new Error("Your price should be bigger than 0!");
    }
    this.#price = price;
  }

  get getCategory() {
    return this.#category;
  }
  set setCategory(category) {
    if (category === "") {
      throw new Error("You cannot enter empty category!");
    }
    this.#category = category;
  }
}
class ApplicationUser {
  #email;
  #password;

  constructor(email, password) {
    this.#email = ApplicationUser.#validateEmail(email);
    this.#password = ApplicationUser.#validatePassword(password);
  }

  static #validateEmail(email) {
    if (email === "") {
      throw new Error("You cannot enter empty email!");
    }
    return email;
  }

  static #validatePassword(password) {
    if (password.toString().length < 4) {
      throw new Error(
        "You cannot enter password less than 4 charachters or numbers!"
      );
    }
    return password;
  }

  get getEmail() {
    return this.#email;
  }

  set setEmail(newEmail) {
    if (newEmail === "") {
      throw new Error("You cannot enter empty email!");
    }
    this.#email = newEmail;
  }

  get getPassword() {
    return this.#password;
  }

  set setPassword(newPassword) {
    if (newPassword.toString().length < 4) {
      throw new Error(
        "You cannot enter password less than 4 charachters or numbers!"
      );
    }
    this.#password = newPassword;
  }
}

class Customer extends ApplicationUser {
  #balance;
  constructor(email, password, balance) {
    super(email, password);
    this.#balance = Customer.#validateBalance(balance);
  }

  static #validateBalance(balance) {
    if (balance < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    return balance;
  }

  get getBalance() {
    return this.#balance;
  }
  set setBalance(balance) {
    if (balance < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    this.#balance = balance;
  }
}

class CustomerDatabase {
  #testCustomer = new Customer("test@", 5555, 5000);
  get getTestCustomer() {
    return this.#testCustomer;
  }

  #newCustomer = new Customer("user@", 1234, 2000);
  get getNewCustomer() {
    return this.#newCustomer;
  }

  #customers = [this.#testCustomer];
  get getCustomers() {
    return this.#customers;
  }

  addNewCustomer() {
    this.#customers.push(this.#newCustomer);
  }
}

class ProductDatabase extends CustomerDatabase {
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

const productDatabase = new ProductDatabase();

function deleteProduct() {
  if (productDatabase.getProducts.length > 0) {
    productDatabase.deleteProduct();
    return "You've Successfuly deleted your product";
  }
  if (productDatabase.getProducts.length == 0) {
    return "You don't have any products now :(";
  }
}

module.exports = deleteProduct;
