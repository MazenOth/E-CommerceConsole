import { Controller } from "../Controller/controller.js";
import { Service } from "../Service/service.js";

const controller = new Controller();
const service = new Service();

var input = prompt("Please choose your role: \n 1- Customer \n 2- Admin");

//Customer
if (input == 1) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    controller.customerSignIn();
    controller.customerFeatures();
  }
  if (input == 2) {
    controller.customerSignUp();
    controller.customerFeatures();
  }
}

//Admin
if (input == 2) {
  input = prompt(
    "Please choose one of the following: \n 1- Signin \n 2- Signup"
  );
  if (input == 1) {
    controller.adminSignIn();
    controller.adminFeatures();
  }
  if (input == 2) {
    controller.adminSignUp();
    controller.adminFeatures();
  }
}
