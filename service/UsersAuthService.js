import { UsersDatabase } from "../model/repos/UsersDatabase.js";

const usersDatabase = new UsersDatabase();

export class UsersAuthService {
  #currentUserIndex;

  signIn(email, password) {
    for (let i = 0; i < usersDatabase.getUsers.length; i++) {
      if (usersDatabase.getUsers[i].getEmail == email) {
        console.log("email is correct!");
        this.#currentUserIndex = i;
        if (
          usersDatabase.getUsers[this.#currentUserIndex].getPassword == password
        ) {
          console.log("password is correct!");
          console.log("Singned in successfully!");
          break;
        } else if (
          usersDatabase.getUsers[this.#currentUserIndex].getPassword != password
        ) {
          throw new Error("Please check your password!");
        }
      } else if (i == usersDatabase.getUsers.length - 1) {
        throw new Error("Please check your email!");
      }
    }
  }

  signUp(email, password, role) {
    usersDatabase.getNewUser.setEmail = email;
    usersDatabase.getNewUser.setPassword = password;
    usersDatabase.getNewUser.setRole = role;
  }

  signUpBalance(balance) {
    usersDatabase.getNewUser.setBalance = balance;
  }

  showNewUser() {
    usersDatabase.addNewUser();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(usersDatabase.getNewUser);
  }
}
