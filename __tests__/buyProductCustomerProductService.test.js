const buyProduct = require("../project_unit_testing/customer_product_service/buyProductCustomerProductService");

describe("Testig of 'buyProduct()' method inside 'CustomerProductService' class", () => {
    test("Entering valid product name", () => {
        expect(buyProduct("test")).toBe("Your new balance is 1900LE.");
    });

    test("Entering not valid product name", () => {
        expect(buyProduct("mango")).toBe("Please check your product's name!");
    });
});