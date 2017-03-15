//My answer

var input = [ 4, 3, 9, 7, 2, 1 ];

function squareOrSquareRoot(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
  if (Math.sqrt(array[i]) % 1 == 0) {
    newArray.push(Math.sqrt(array[i]))
    } else {
    newArray.push(Math.pow(array[i], 2))
    }

}
return newArray;
}
console.log(squareOrSquareRoot(input));


//Best answer
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });
}
