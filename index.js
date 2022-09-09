
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

    for (let i = 0; i < userDatabase.getUsers.length; i++) {
        if(userDatabase.getUsers[i].getEmail == email) {
            console.log("email is correct!");
        } else {
            throw new Error("Please check your email!");
        }
    }
    password = prompt("Please insert your password");    

    for (let i = 0; i < userDatabase.getUsers.length; i++) {
        if(userDatabase.getUsers[i].getPassword == password) {
            console.log("password is correct!");
            console.log("Singned in successfully!");
        } else {
            throw new Error("Please check your password!");
        }
    }
}    

if(input == 2) {
    email = prompt("Please insert your new email");
    userDatabase.getUser1.setEmail = email;
    password = prompt("Please insert your new password");
    userDatabase.getUser1.setPassword = password;
    userDatabase.callAddNewUser();
    console.log(`You've Successfuly Signed Up and this is your new user below:`); 
    console.log(userDatabase.getUser1);  
}


let input2 = prompt("Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products");

const productDatabase = new ProductDatabase();
var productName;
var price;
var category;

if(input2 == 1) {
    productName = prompt("Please insert your new Product Name");
    productDatabase.getProduct1.setName = productName;
    price = prompt("Please insert your new Product Price");
    productDatabase.getProduct1.setPrice = price;
    category = prompt("Please insert your new Product Category");
    productDatabase.getProduct1.setCategory = category;
    
    productDatabase.CallAddProduct();
    console.log("You've Successfuly added new product, Check it out:");
    console.log(productDatabase.getProduct1);
}

if(input2 == 2) {
    productName = prompt("Please insert your new Product Name");
    productDatabase.getTestProduct.setName = productName;
    price = prompt("Please insert your new Product Price");
    productDatabase.getTestProduct.setPrice = price;
    category = prompt("Please insert your new Product Category");
    productDatabase.getTestProduct.setCategory = category;
    
    productDatabase.callUpdateProduct();
    console.log("You've Successfuly updated your product, Check it out now:");
    console.log(productDatabase.getTestProduct);
}

if(input2 == 3) {
    var inp = prompt("Are you sure you wanna delete your product? \n 1-Yes \n 2-No");
    if(inp == 1) {
        productDatabase.callDeleteProduct();
        console.log("You've Successfuly deleted your product");
        if(productDatabase.getProducts.length == 0) {
            console.log("You don't have any products now :(")
        }
    }else{
        console.log("Nothing Deleted, Check your products:");
        console.log(productDatabase.getProducts[0]);
    } 
}

if(input2 == 4) {
    console.log("Here are your products:");
    productDatabase.callListProducts();
}

















