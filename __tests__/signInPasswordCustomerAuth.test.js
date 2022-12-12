const customerAuthSignInPassword = require("../project_unit_testing/customer_auth_service/signInPasswordCustomerAuth");

describe("Testig of 'signInPassword()' method inside 'CustomerAuthService' class", () => {
    test("Entering valid password", () => {
        expect(customerAuthSignInPassword(5555)).toBe("password is correct!");
    });

    test("Entering wrong password", () => {
        expect(customerAuthSignInPassword(1234)).toBe("Please check your password!");
    });
});