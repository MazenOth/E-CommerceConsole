
import{User} from './user.js';
import{UserDatabase} from './userdatabase.js';
import{Product} from './product.js';
import{ProductDatabase} from './productdatabase.js';


const userDatabase = new UserDatabase();
var email;
var password;

let input = prompt("Please choose one of the following: \n 1- Signin \n 2- Signup");

if(input == 1) {
    email = prompt("Please insert your email");

    for (let i = 0; i < userDatabase.users.length; i++) {
        if(userDatabase.users[i].email == email) {
            console.log("email is correct!");
            password = prompt("Please insert your password");
            
        }
    }
    for (let i = 0; i < userDatabase.users.length; i++) {
        if(userDatabase.users[i].password == password) {
            console.log("password is correct!");
            console.log("Singned in successfully!");
        }
    }
}    

if(input == 2) {
    email = prompt("Please insert your new email");
    password = prompt("Please insert your new password");
    const user1 = new User(email, password);
    userDatabase.addUser(user1);
    console.log(`You've Successfuly Signed Up and this is your new user below:`); 
    console.log(user1);  
}


let input2 = prompt("Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products");

const productDatabase = new ProductDatabase();
var productName;
var price;
var category;
var productNumber;

if(input2 == 1) {
    productName = prompt("Please insert your new Product Name");
    price = prompt("Please insert your new Product Price");
    category = prompt("Please insert your new Product Category");
    const product1 = new Product(productName, price, category);
    productDatabase.addProduct(product1);
    console.log("You've Successfuly added new product, Check it out:");
    console.log(product1);
}
if(input2 == 2) {
    productName = prompt("Please insert your new Product Name");
    price = prompt("Please insert your new Product Price");
    category = prompt("Please insert your new Product Category");
    
    productDatabase.updateProduct(productName, price, category);
    console.log("You've Successfuly updated your product, Check it out now:");
    console.log(productDatabase.testProduct);
}

if(input2 == 3) {
    var inp = prompt("Are you sure you wanna delete your product? \n 1-Yes \n 2-No");
    if(inp == 1) {
        productDatabase.deleteProduct();
        console.log("You've Successfuly deleted your product");
        if(productDatabase.products.length == 0) {
            console.log("You don't have any products now :(")
        }
    }else{
        console.log("Nothing Deleted, Check your product:");
        console.log(productDatabase.products[0]);
    } 
}

if(input2 == 4) {
    console.log("Here are your products:");
    productDatabase.listProducts();
}

















