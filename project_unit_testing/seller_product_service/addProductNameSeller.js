function addProductName(productName) {
  if (productName === "") {
    return "You cannot enter empty name!";
  } else {
    return "Your product's Name signed up successfully!";
  }
}

module.exports = addProductName;
