
export class User {
  #email;
  #password;
  #role;

  constructor(email, password) {
    this.#email= User.#validateEmail(email);
    this.#password = User.#validatePassword(password); 
    this.#role = "Admin";
    }

    static #validateEmail(email) {
      if(email === "") {
        throw new Error("You cannot enter empty email!");
      }
        return email;
    }

    static #validatePassword(password) {
      if(password.toString().length < 4) {
        throw new Error("You cannot enter password less than 4 charachters or numbers!");
      } 
      return password;
    }

    get getEmail() {
      return this.#email;
    } 

    set setEmail(newEmail) {
      if(newEmail === "") {
        throw new Error("You cannot enter empty email!");
      }
        this.#email = newEmail;
      }
    
    get getPassword() {
      return this.#password;
    } 

    set setPassword(newPassword) {
      if(newPassword.toString().length < 4) {
        throw new Error("You cannot enter password less than 4 charachters or numbers!");
      } 
      this.#password = newPassword;
    }
    
    get getRole() {
      return this.#role;
    }

    set setRole(role) {
      this.#role = role;
    }
  }
      