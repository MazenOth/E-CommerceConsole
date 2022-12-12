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
  testCustomer = new Customer("test@", 5555, 5000);
  get getTestCustomer() {
    return this.testCustomer;
  }

  newCustomer = new Customer("user@", 1234, 2000);
  get getNewCustomer() {
    return this.newCustomer;
  }

  customers = [this.testCustomer];
  
  get getCustomers() {
    return this.customers;
  }

  addNewCustomer() {
    this.customers.push(this.newCustomer);
  }
}

const customerDatabase = new CustomerDatabase();

function customerAuthSignInEmail(email) {
  for (let i = 0; i < customerDatabase.customers.length; i++) {
    if (customerDatabase.customers[i].getEmail == email) {
      return "email is correct!";
    } else {
      return "Please check your email!";
    }
  }
}

module.exports = customerAuthSignInEmail;
