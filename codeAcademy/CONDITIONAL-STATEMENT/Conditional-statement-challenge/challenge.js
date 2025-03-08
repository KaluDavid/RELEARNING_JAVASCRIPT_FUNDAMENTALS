"use strict";

const userPin = 2025;
const userAcc = 100000;
// 1. User Authentication:

// Authentication notification message before proceeding

const welcomeNot = alert(
  `Welcome to the Smart ATM!, would you like to proceed withdrawal?`
);

const authMessage = Number(prompt("Enter your 4 digit pin: 2025"));

if (authMessage === userPin) {
  alert("✅ PIN Correct! Access Granted");

  // 2. ATM Options:

  // Prompting user input to pick an option
  let userPick;
  const userOptionPick = () =>
    (userPick = Number(
      prompt(`Select an option: (e.g) 1 or 2;
      1. Check Balance
      2. Withdraw money
      3. Deposit money
      4. Exit
      `)
    ));

  // 3. Conditions to Check:

  let userWithdrawal;
  let userDeposit;

  // Handle user input
  switch (userOptionPick()) {
    case 1:
      // current Balance
      alert(`Your account Balance is $${userAcc}`);
      break;
    case 2:
      userWithdrawal = Number(prompt("Enter withdrawal amount"));
      break;
    case 3:
      userDeposit = Number(prompt("Enter deposit amount"));
      break;
    case 4:
      alert("Bye, thanks for Banking with us");
      break;
    default:
      alert("Please enter a valid option .e.g enter 1, 2, 3, or 4");
      break;
  }

  if (userPick === 2) {
    //If withdrawing, check if there’s enough money before allowing.
    userWithdrawal > userAcc
      ? alert("🛑 Oops, insufficient funds")
      : alert(
          `✅ Withdrawal successful! Your new balance is: $${
            userAcc - userWithdrawal
          }`
        );
  } else if (userPick === 3) {
    // If depositing, users can only deposit $50 and above
    userDeposit < 50
      ? alert("Sorry, you cannot deposit less than $50")
      : alert(
          `✅ Deposit successful! Your new balance is: $${
            userDeposit + userAcc
          }`
        );

    // ✅ Prevent overdrawing and handle invalid inputs
  }
} else {
  alert("🛑 oops, wrong pin");
}
