function customerAuthSignUpBalance(balance) {
  if (balance < 0) {
    return "Please enter a valid amount of balance!";
  } else {
    return "You've updated your balance successfully!";
  }
}

module.exports = customerAuthSignUpBalance;
