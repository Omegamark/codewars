actual = [ 23, 2, 3, 4, 5 ];

function sortByValueAndIndex(array) {
  // create 2nd arrray to compare
  newArray = [];

  // iterate through array
  array.map(function(index) {

    // multiply the index by the value, using a 1 index
    console.log(index * (array.indexOf(index) + 1));
    newArray.push(index * (array.indexOf(index) + 1));
    console.log('this is the new array', newArray);
    return newArray;



  });

  console.log('Old array', array)
  console.log('new array', newArray)
  // resort the original array based on the new array
  array.sort(function(a, b) {

    if a


  });
  return array;
}

sortByValueAndIndex(actual)
