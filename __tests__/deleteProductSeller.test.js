const deleteProduct = require("../project_unit_testing/seller_product_service/deleteProductSeller");

describe("Testig of 'deleteProduct()' method inside 'SellerProductService' class", () => {
  test("Have products to delete", () => {
    expect(deleteProduct()).toEqual("You've Successfuly deleted your product");
  });

  test("Don't have products to delete", () => {
    expect(deleteProduct()).toEqual("You don't have any products now :(");
  });
});
