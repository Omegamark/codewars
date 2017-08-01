var test = "zzbaabcd";
var palindromeString;
var palindromeLength = [];


longestPalindrome=function(s){
  // Check each letter for an open and close
  for (i = 0; i < s.length; i++) {
    // console.log('this is charat I', s.charAt(i));
    for (j = s.length -1; j >= 0; j--) {
      // console.log('this is charat J', s.charAt(j));
      // if charat I is == to charat J then check for palindrome
      if( s.charAt(i) == s.charAt(j) && j - i >= 0) {
        palindromeString = s.substring(i, j + 1);
        // It is important to not the difference between substr(starting index, max length up to and including) vs substring(Starting index, ending index up to and not including)
        console.log('This is palindromeString', palindromeString);
        palindromeLength.push(palindromeString.length);
        // console.log(palindromeLength);






          /* This particular 'for loop' wasn't working correctly



                                               for(k = 0; k < (palindromeString.length/2) - 1; k++) {
                                                 console.log('this is charat K', palindromeString[k]);
                                                 for (l = palindromeString.length - 1; l > palindromeString.length/2; l--){
                                                   console.log('this is charat L', palindromeString[l]);
                                                  }

                                                 }
        */



        // console.log('this is I', s.charAt(i));
        // console.log('this is index I', i);
        // console.log('this is J', s.charAt(j));
        // console.log('this is index J', j);
        // console.log('This is the palindromeString', palindromeString);
        // console.log('Space!!!');
        // console.log('this is index of I', s.indexOf(s.charAt(i)));
        // console.log('this is index of I again', s[i]);
        // var palindromeCheck = s.substr(s.indexOf(s.charAt(i)), s.indexOf(s.charAt(j)))
      }

      // console.log('this is PString', i, j, palindromeString);
      // console.log('this is only PString', palindromeString);
      // console.log(palindromeCheck);
      // console.log(s.substring(i));
    }

  }

  /* All of the return the Max of an array
  console.log((function(palindromeLength) {
    return Math.max.apply(null, palindromeLength)

  })(palindromeLength));

  console.log(palindromeLength.reduce(function(a,b) {
    return Math.max(a,b)
  }));

  console.log(Math.max(...palindromeLength));
  */

  return Math.max(...palindromeLength);
  // Move that substring into a variable
  // Reverse the variable and check for equivolence
  // Count the number of characters
  // Return the number of characters

};

longestPalindrome(test);











// This is the attempt to fix the issues.









var test = "zyabyz";
var palindromeString;
var palindromeLength = [];
var potentialPalindromeArray = [];
var newArray = []


longestPalindrome=function(s){

  for (i = 0; i < s.length; i++) {

    for (j = s.length -1; j >= 0; j--) {

      if( s.charAt(i) == s.charAt(j) && j - i >= 0) {
        palindromeString = s.substring(i, j + 1);

        // console.log('This is palindromeString', palindromeString);

        potentialPalindromeArray.push(palindromeString);

      }

    }

  }

   console.log('This is the potential', potentialPalindromeArray);

  potentialPalindromeArray.forEach(function(x) {
    for (k = 0; k < x.length/2; k++) {
      // console.log("this is x", x);
      // console.log('this is the substring', x[k])
      // console.log('this is the reverse substring', x[x.length-1-k])
      if(x.length > 1 && x[k] !== x[x.length-1-k]) {
        console.log('this is false x', x)
       console.log('sadkfjasdlkfjdksfajsl', potentialPalindromeArray.splice(potentialPalindromeArray.indexOf(x), 1))
        console.log(newArray)
      } else {

      palindromeLength.push(x.length);
      }
    }
    console.log('fucking fuck fuck fuck', potentialPalindromeArray)
  })
  console.log('new goddamned array', newArray)
  console.log(potentialPalindromeArray)
  console.log(palindromeLength)



  // return Math.max(...palindromeLength);

};

longestPalindrome(test);
