const customerAuthSignUpEmail = require("../project_unit_testing/customer_auth_service/signUpEmailCustomerAuth");

describe("Testig of 'signUpEmail()' method inside 'CustomerAuthService' class", () => {
    test("Entering valid email", () => {
        expect(customerAuthSignUpEmail("any@")).toBe("Your email signed up successfully!");
    });

    test("Entering empty email", () => {
        expect(customerAuthSignUpEmail("")).toBe("You cannot enter empty email!");
    });
});