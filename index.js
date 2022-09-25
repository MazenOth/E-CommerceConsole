import { User } from "./user.js";
import { UserDatabase } from "./userdatabase.js";
import { Product } from "./product.js";
import { ProductDatabase } from "./productdatabase.js";
import { Customer } from "./customer.js";

const userDatabase = new UserDatabase();
const productDatabase = new ProductDatabase();

var email;
var password;
var balance;
var productName;
var price;
var category;

let input = prompt("Please choose your role: \n 1- Customer \n 2- Admin");

if (input == 1) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    email = prompt("Please insert your email");

    for (let i = 0; i < userDatabase.getCustomers.length; i++) {
      if (userDatabase.getCustomers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
    password = prompt("Please insert your password");

    for (let i = 0; i < userDatabase.getCustomers.length; i++) {
      if (userDatabase.getCustomers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
        var input2 = prompt(
          "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data"
        );

        if (input2 == 1) {
          console.log("Here are your products:");
          productDatabase.callListProducts();
        }
        if (input2 == 2) {
          productName = prompt(
            "Please insert your product's name you want to buy:"
          );
          productDatabase.buyProduct(productName);
        }
        if (input2 == 3) {
          input = prompt(
            "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
          );
          if (input == 1) {
            email = prompt(
              `Your previous mail is >> ${userDatabase.getCustomer1.getEmail} << please insert your new mail:`
            );
            userDatabase.getCustomer1.setEmail = email;
            console.log(
              `You've successfully updated your email! \nHere are your new data:`,
              userDatabase.getCustomer1
            );
          }
          if (input == 2) {
            password = prompt("please insert your old password:");
            if (password == userDatabase.getCustomer1.getPassword) {
              password = prompt("please insert your new password:");
              userDatabase.getCustomer1.setPassword = password;
              console.log(
                `You've successfully updated your password! \nHere are your new data:`,
                userDatabase.getCustomer1
              );
            } else {
              throw new Error("Password incorrect, please try again!");
            }
          }
          if (input == 3) {
            balance = prompt(
              `Your old balance is >> ${userDatabase.getCustomer1.getBalance}LE << \nPlease insert your new balance:`
            );
            userDatabase.getCustomer1.setBalance = balance;
            console.log(
              `You've successfully updated your balance! \nHere are your new data:`,
              userDatabase.getCustomer1
            );
          }
        }
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  if (input == 2) {
    email = prompt("Please insert your new email");
    userDatabase.getCustomer1.setEmail = email;
    password = prompt("Please insert your new password");
    userDatabase.getCustomer1.setPassword = password;
    balance = prompt("Please insert your balance");
    userDatabase.getCustomer1.setBalance = balance;
    userDatabase.callAddNewCustomer();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(userDatabase.getCustomer1);

    var input2 = prompt(
      "Please choose one of the following: \n 1-List Products \n 2-Buy Product \n 3-Edit Account Data"
    );

    if (input2 == 1) {
      console.log("Here are your products:");
      productDatabase.callListProducts();
    }
    if (input2 == 2) {
      productName = prompt(
        "Please insert your product's name you want to buy:"
      );
      productDatabase.buyProduct(productName);
    }
    if (input2 == 3) {
      input = prompt(
        "Choose what you want to update: \n 1-Email \n 2-Password \n 3-Balance"
      );
      if (input == 1) {
        email = prompt(
          `Your previous mail is >> ${userDatabase.getCustomer1.getEmail} << please insert your new mail:`
        );
        userDatabase.getCustomer1.setEmail = email;
        console.log(
          `You've successfully updated your email! \nHere are your new data:`,
          userDatabase.getCustomer1
        );
      }
      if (input == 2) {
        password = prompt("please insert your old password:");
        if (password == userDatabase.getCustomer1.getPassword) {
          password = prompt("please insert your new password:");
          userDatabase.getCustomer1.setPassword = password;
          console.log(
            `You've successfully updated your password! \nHere are your new data:`,
            userDatabase.getCustomer1
          );
        } else {
          throw new Error("Password incorrect, please try again!");
        }
      }
      if (input == 3) {
        balance = prompt(
          `Your old balance is >> ${userDatabase.getCustomer1.getBalance}LE << \nPlease insert your new balance:`
        );
        userDatabase.getCustomer1.setBalance = balance;
        console.log(
          `You've successfully updated your balance! \nHere are your new data:`,
          userDatabase.getCustomer1
        );
      }
    }
  }
}

if (input == 2) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    email = prompt("Please insert your email");

    for (let i = 0; i < userDatabase.getUsers.length; i++) {
      if (userDatabase.getUsers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
    password = prompt("Please insert your password");

    for (let i = 0; i < userDatabase.getUsers.length; i++) {
      if (userDatabase.getUsers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
        input2 = prompt(
          "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
        );
        
        if (input2 == 1) {
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
        
        if (input2 == 2) {
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
        
        if (input2 == 3) {
          var inp = prompt(
            "Are you sure you wanna delete your product? \n 1-Yes \n 2-No"
          );
          if (inp == 1) {
            productDatabase.callDeleteProduct();
            console.log("You've Successfuly deleted your product");
            if (productDatabase.getProducts.length == 0) {
              console.log("You don't have any products now :(");
            }
          } else {
            console.log("Nothing Deleted, Check your products:");
            console.log(productDatabase.getProducts[0]);
          }
        }
        
        if (input2 == 4) {
          console.log("Here are your products:");
          productDatabase.callListProducts();
        }
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  if (input == 2) {
    email = prompt("Please insert your new email");
    userDatabase.getUser1.setEmail = email;
    password = prompt("Please insert your new password");
    userDatabase.getUser1.setPassword = password;
    userDatabase.callAddNewUser();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
      );
      console.log(userDatabase.getUser1);
      input2 = prompt(
        "Please choose one of the following: \n 1-Add Product \n 2-Update Product \n 3-Delete Product \n 4-List Products"
      );
      
      if (input2 == 1) {
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
      
      if (input2 == 2) {
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
      
      if (input2 == 3) {
        var inp = prompt(
          "Are you sure you wanna delete your product? \n 1-Yes \n 2-No"
        );
        if (inp == 1) {
          productDatabase.callDeleteProduct();
          console.log("You've Successfuly deleted your product");
          if (productDatabase.getProducts.length == 0) {
            console.log("You don't have any products now :(");
          }
        } else {
          console.log("Nothing Deleted, Check your products:");
          console.log(productDatabase.getProducts[0]);
        }
      }
      
      if (input2 == 4) {
        console.log("Here are your products:");
        productDatabase.callListProducts();
      }
  }
}

