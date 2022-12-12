const customerAuthSignInEmail = require("../project_unit_testing/customer_auth_service/signInEmailCustomerAuth");

describe("Testig of 'signInEmail()' method inside 'CustomerAuthService' class", () => {
    test("Entering valid email", () => {
        expect(customerAuthSignInEmail("test@")).toBe("email is correct!");
    });

    test("Entering not valid email", () => {
        expect(customerAuthSignInEmail("test")).toBe("Please check your email!");
    });
});