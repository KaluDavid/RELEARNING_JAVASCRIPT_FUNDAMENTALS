"use strict";

const userPin = 2025;

/*Fix: Convert userAcc into a mutable variable (let userAcc) and update it when transactions occur: */

let userAcc = 100000;

const welcomeNot = alert(
  `Welcome to the Smart ATM!, would you like to proceed withdrawal?`
);

const authMessage = Number(prompt("Enter your 4 digit pin: 2025"));

if (authMessage === userPin) {
  alert("✅ PIN Correct! Access Granted");

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

  let userWithdrawal;
  let userDeposit;

  // Fix 1️⃣-
  /* switch case runs immediately when userOptionPick() is called.
  Instead of calling userOptionPick() inside switch, store its return value first. */

  userOptionPick(); // Call function to set userPick
  switch (userPick) {
    case 1:
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

  // COnverting Ternary operator to if else statement inside the if else if block
  if (userPick === 2) {
    if (userWithdrawal > userAcc) {
      alert("🛑 Oops, insufficient funds");
    } else {
      userAcc -= userWithdrawal; // Deduct from balance
      alert(`✅ Withdrawal successful! Your new balance is: $${userAcc}`);
    }
  } else if (userPick === 3) {
    if (userDeposit < 50) {
      alert("Sorry, you cannot deposit less than $50");
    } else {
      userAcc += userDeposit;
      alert(`✅ Deposit successful! Your new balance is: $${userAcc}`);
    }
  }
} else {
  alert("🛑 oops, wrong pin");
}
