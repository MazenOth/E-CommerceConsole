const listProducts = require("../project_unit_testing/customer_product_service/listProductsCustomerProductService");

describe("Testig of 'listProducts()' method inside 'CustomerProductService' class", () => {
    test("Run listProducts()", () => {
        expect(listProducts()).toEqual({});
    });
});