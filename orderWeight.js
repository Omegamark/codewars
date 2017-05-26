var test = "103 123 4444 99 2000"

function orderWeight(strng) {
  // Split the string
  let split = splitString(strng);
  console.log(split)
  // Convert to integers

  // Reduce numbers
  console.log(reduceNums(split));
}

function splitString (string) {
  return string.split(" ");
}

function reduceNums(stringArray) {
  stringArray.forEach(function(x) {
    let splitNums = x.split("");

    // console.log(splitNums);
    let stringToNum = [];
    stringToNum = splitNums.map(function(x) {
      return parseInt(x);
    });
     let referenceArray = stringToNum.reduce(function(a, b) {
    return a + b;
  });
    console.log(stringToNum)
    console.log(referenceArray)
    // Use the referenceArray to reorder the original array.

  });

}






orderWeight(test);
