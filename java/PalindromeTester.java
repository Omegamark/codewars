// run from the command line with:
// javac PalindromeTester.java && java PalindromeTester

public class PalindromeTester {

  public boolean isPalindrome(String input) {
    boolean palindrome = true;
    String lower = input.toLowerCase();
    String lowerString = lower.replaceAll(" ", "");
    System.out.println(lowerString);
    System.out.println(lowerString.charAt(1));

    for (int i = 0; i < lowerString.length()/2; i++) {
      if (lowerString.charAt(i) == lowerString.charAt(lowerString.length() - i - 1)) {
        palindrome = true;
      } else {
        return false;

      }
    }
    // your code here
    return palindrome;
  }

  public static void main(String[] args) {
    printTestPalindrome("race car"); //true
    printTestPalindrome("wat"); //false
    printTestPalindrome("stack cats"); //true
    printTestPalindrome("who"); //false
    printTestPalindrome("step on no pets"); //true
    printTestPalindrome("when"); //false
    printTestPalindrome("taco cat"); //true
    printTestPalindrome("tjinkt");
  }

  public static void printTestPalindrome(String input) {
    PalindromeTester tester = new PalindromeTester();
    System.out.println(input + ": " + tester.isPalindrome(input)); //true
  }

}
