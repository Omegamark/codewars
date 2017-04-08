function fizzBuzz () {
  numArray = [];

  for (i = 1; i <= 100; i++) {
    console.log(i);
    numArray.push(i);

    }
  for (j=0; j < numArray.length; j++) {
    if (numArray[j] % 3 === 0 && numArray[j] % 5 === 0) {
      numArray[j] = 'fizzBuzz';
    } else if (numArray[j] % 3 === 0) {
      numArray[j] = 'fizz';
    } else if (numArray[j] % 5 === 0) {
      numArray[j] = 'Buzz';
    }
  }

  console.log(numArray);
}
fizzBuzz();
