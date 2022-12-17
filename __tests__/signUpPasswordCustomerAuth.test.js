const customerAuthSignUpPassword = require("../project_unit_testing/customer_auth_service/signUpPasswordCustomerAuth");

describe("Testig of 'signUpPassword()' method inside 'CustomerAuthService' class", () => {
  test("Entering valid password", () => {
    expect(customerAuthSignUpPassword(1234)).toBe(
      "You password signed up successfully!"
    );
  });

  test("Entering not valid password", () => {
    expect(customerAuthSignUpPassword(123)).toBe(
      "You cannot enter password less than 4 charachters or numbers!"
    );
  });
});
