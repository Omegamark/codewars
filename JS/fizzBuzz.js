function fizzBuzz (num) {
  numArray = [];

  for (i = 100; i <= num; i++) {
    // console.log(i);
    numArray.push(i);
  }
  for (j=0; j < numArray.length; j++) {
    if (numArray[j] % 3 === 0 && numArray[j] % 5 === 0 && numArray[j] % 7 === 0) {
      numArray[j] = 'fizzBuzzBazz';
    } else if (numArray[j] % 3 === 0 && numArray[j] % 5 === 0) {
      numArray[j] = 'fizzBuzz';
    } else if (numArray[j] % 3 === 0 && numArray[j] % 7 === 0) {
      numArray[j] = 'fizzBazz';
    } else if (numArray[j] % 5 === 0 && numArray[j] % 7 === 0) {
      numArray[j] = 'buzzBazz';
    } else if (numArray[j] % 3 === 0) {
      numArray[j] = 'fizz';
    } else if (numArray[j] % 5 === 0) {
      numArray[j] = 'Buzz';
    } else if (numArray[j] % 7 === 0) {
      numArray[j] = 'Bazz';
    }
  }
  //


  console.log(numArray);
}
fizzBuzz(200);

fizzBuzzBazz(limit, )
