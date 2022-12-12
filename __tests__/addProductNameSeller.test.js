const addProduct = require("../project_unit_testing/seller_product_service/addProductNameSeller")

describe("Testig of 'addProduct()' method inside 'SellerProductService' class", () => {
    test("Entering empty product name", () => {
        expect(addProduct("")).toBe("You cannot enter empty name!");
    });

    test("Entering not valid product name", () => {
        expect(addProduct("mango")).toBe("Your product's Name signed up successfully!");
    });
});