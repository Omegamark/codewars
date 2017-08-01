Test.assertEquals(reverseLetter("krishan"),"nahsirk")

Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

Test.assertEquals(reverseLetter("ab23c"),"cba")

Test.assertEquals(reverseLetter("krish21an"),"nahsirk")


function reverseLetter(str) {
 var sanatizedString = str.match(/[a-zA-Z]/g);
 var reversed = sanatizedString.reverse();
 var reversedStr = reversed.join('');
 return reversedStr;
  }
