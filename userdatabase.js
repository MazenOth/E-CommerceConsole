
import{User} from './user.js';

export class UserDatabase{
    #testUser = new User("test@", 5555);
    get getTestUser() {
        return this.#testUser;
    }

    #user1 = new User("user@" ,1234);
    get getUser1() {
        return this.#user1;
    }

    #users = [this.#testUser];
    get getUsers() {
        return this.#users;
    }

    #addNewUser() {
        this.#users.push(this.#user1);
    }
    callAddNewUser() {
        return this.#addNewUser();
    }
}