function customerAuthSignUpPassword(password) {
  if (password.toString().length < 4) {
    return "You cannot enter password less than 4 charachters or numbers!";
  } else {
    return "You password signed up successfully!";
  }
}

module.exports = customerAuthSignUpPassword;
