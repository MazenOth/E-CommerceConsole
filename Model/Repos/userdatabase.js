
import { Customer } from '../Entities/customer.js';
import{User} from '../Entities/user.js';

export class UserDatabase{
    #testUser = new User("test@", 5555);
    get getTestUser() {
        return this.#testUser;
    } 

    #testCustomer = new Customer("test@", 5555, 5000);
    get getTestCustomer() {
        return this.#testCustomer;
    }

    #user1 = new User("user@" ,1234);
    get getUser1() {
        return this.#user1;
    }

    #customer1 = new Customer("user@" ,1234, 2000);
    get getCustomer1() {
        return this.#customer1;
    }

    #users = [this.#testUser];
    get getUsers() {
        return this.#users;
    }

    #customers = [this.#testCustomer];
    get getCustomers() {
        return this.#customers;
    }

    #addNewUser() {
        this.#users.push(this.#user1);
    }
    callAddNewUser() {
        return this.#addNewUser();
    }

    #addNewCustomer() {
        this.#customers.push(this.#customer1);
    }
    callAddNewCustomer() {
        return this.#addNewCustomer();
    }
    
}