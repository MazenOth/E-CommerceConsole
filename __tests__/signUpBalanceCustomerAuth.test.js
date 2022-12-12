const customerAuthSignUpBalance = require("../project_unit_testing/customer_auth_service/signUpBalanceCustomerAuth");

describe("Testig of 'signUpBalance()' method inside 'CustomerAuthService' class", () => {
    test("Entering not valid balance", () => {
        expect(customerAuthSignUpBalance(-100)).toBe("Please enter a valid amount of balance!");
    });

    test("Entering valid balance", () => {
        expect(customerAuthSignUpBalance(0)).toBe("You've updated your balance successfully!");
    });

    test("Entering valid balance", () => {
        expect(customerAuthSignUpBalance(100)).toBe("You've updated your balance successfully!");
    });
});