
function customerAuthSignUpEmail(email) {
  if (email === "") {
    return "You cannot enter empty email!";
  } else {
    return "Your email signed up successfully!";
  }
}

module.exports = customerAuthSignUpEmail;
