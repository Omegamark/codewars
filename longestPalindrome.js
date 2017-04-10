var test = "zzbaabcd";
var letter = [];

longestPalindrome=function(s){
  // Check each letter for an open and close
  for (i = s.length - 1; i < s.length; i++) {
    console.log('this is charat I', s.charAt(i));
    for (j = 0; j < s.length; j--) {
      console.log('this is charat J', s.charAt(j));

      console.log(s.substring(i));
    }
  }
  // Move that substring into a variable
  // Reverse the variable and check for equivolence
  // Count the number of characters
  // Return the number of characters

};

longestPalindrome(test);
