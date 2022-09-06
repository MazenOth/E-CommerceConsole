
import{User} from './user.js';

export class UserDatabase{
    testUser = new User("test@", 55);
    users = [this.testUser];
    addUser(user) {
        this.users.push(user);
    }
}