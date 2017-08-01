/* My purpose in this challenge was to use string methods and break the validation into
several smaller functions. Would have probably been better handled with a split & for loop,
stepping through and checking each character with a while loop. This function fails if checker
is flipped to true on a subsequent validator.*/

"use strict";
function validPhoneNumber(numberString) {
  // Check for the correct format
  // Check the length

  let checker = true;

  while (checker === true) {
    // Have the checker remain true throughout validation, once false, the function kicks out and returns false.

    // Check that the length is 14 characters
    lengthValidator(numberString);
    // Check for open & closed parens
    parenValidator(numberString);
    // Check for a dash
    dashValidator(numberString);
    // Quick check for validity to stop the while loop. Misses the case when validation flips checker back to true.
    if (checker === false) {
      return checker;
    } else {
      return checker;
    }
  }
  // Validation functions
  // Test the length of the string, should be 9 digits
  function lengthValidator(numberString) {
    if (numberString.length !== 14) {
      return (checker = false);
    }
  }
  // Test the string for open & closed parens
  function parenValidator(numberString) {
    if (!numberString.includes("(") || !numberString.includes(")")) {
      return (checker = false);
    }
  }
  // Test the string for a dash
  function dashValidator(numberString) {
    if (numberString.charAt(9) !== "-") {
      return (checker = false);
    }
  }
  return checker;
}
validPhoneNumber("(720) 252-0568");

// Best practice from Codewars. Look closeluy at the regex, makes perfect sense. Take note of the test() method.
function validPhoneNumber(phoneNumber) {
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
