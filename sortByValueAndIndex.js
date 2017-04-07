// actual = [ 23, 2, 3, 4, 5 ];
//
// function sortByValueAndIndex(array) {
//   // create 2nd arrray to compare
//   newArray = [];
//
//   // iterate through array
//   array.map(function(index) {
//
//     // multiply the index by the value, using a 1 index
//     console.log(index * (array.indexOf(index) + 1));
//     newArray.push(index * (array.indexOf(index) + 1));
//     console.log('this is the new array', newArray);
//     return newArray;
//
//
//
//   });
//
//   console.log('Old array', array)
//   console.log('new array', newArray)
//   // resort the original array based on the new array
//   array.sort(function(a, b) {
//
//     if a
//
//
//   });
//   return array;
// }
//
// sortByValueAndIndex(actual)
//

// This one actually works. The above attempt had to scrapped. ** This one almost works, fails a few fringe cases.

actual = [ 23, 2, 3, 4, 5 ];
//
function sortByValueAndIndex(array) {
  // create 2nd arrray to compare
  var newArray = [];
  var referenceArray = [];
  var goddamnedAnswer = [];
  // iterate through array
  array.map(function(value, index, array) {
    // console.log('this is actually the index', index);
    // console.log('this is actually the value', value);
    // console.log('array!!', array);
    // multiply the index by the value, using a 1 value
    // console.log(value * (array.indexOf(value) + 1));

    newArray.push(value * (index + 1));
    console.log('this is the new array', newArray);
    // return newArray;
  });

  for (i = 0; i < newArray.length; i++) {
    referenceArray.push(newArray[i]);
  }
  // console.log(referenceArray);
  newArray.sort(function(a, b) {
    return a-b;
  });

  console.log(newArray)
  console.log(referenceArray)

    newArray.map(function(value, index, array) {

    // console.log(value)
    // console.log(index)
    // console.log(array)
    // console.log(referenceArray)
    // console.log('fucking work', value / (referenceArray.indexOf(value) + 1));
    goddamnedAnswer.push(value / (referenceArray.indexOf(value) + 1));
    console.log(value / (referenceArray.indexOf(value) + 1));
    console.log('this is the index', index);
    referenceArray[index + 1] = 'x';
    // console.log('this is the goddamnedAnswer', goddamnedAnswer)
    return goddamnedAnswer;

  });
  return goddamnedAnswer;
}

console.log(sortByValueAndIndex([23, 3, 2, 4, 5]));






// Mike's bubble sort answer.

// Expected: [-30, -25, -30, -9, -12, -17, -27, -5, 26, 18, 16, 8, 12, 26, 26]
//
// sortByValueAndIndex(actual);
// sortByValueAndIndex([ 26, -54, 54, -68, -150, -72, 112, -200, -150, -50, 26, 144, -117, 26 ]);
// sortByValueAndIndex(actual);
//
// function sortByValueAndIndex(array) {
//   let newArray = [];
//   for(let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * (i + 1));
//   }
//   // let ans = mySort(newArray, array);
//   return mySort(newArray, array);
// }
//
// function mySort(array, arrayb) {
//   let indexArray = [];
//   for(let i = 0; i < array.length; i++) {
//     indexArray.push(i);
//   }
//
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[i] > array[j]) {
//         let temp = array[i];
//         let tempB = indexArray[i]
//         array[i] = array[j]
//         array[j] = temp;
//         indexArray[i] = indexArray[j]
//         indexArray[j] = tempB;
//       }
//     }
//   }
//
//   let answer = [];
//   for(let i = 0; i < indexArray.length; i++) {
//     answer.push(arrayb[indexArray[i]]);
//   }
//
//   return answer;
// }

// Best answers from others:
function sortByValueAndIndex(array)
{
  return array.map((a,i) => [ a, a * (i+1)]).sort((a,b) => a[1]-b[1]).map(a => a[0]);
}

// Other best answer, seems clever. Looks like they created an object using JSON.parse
function sortByValueAndIndex(a) {
  return JSON.parse(JSON.stringify(a)).map((e, i) => ({
    index: i + 1,
    value: e
  })).sort((a, b) => a.index * a.value - b.index * b.value).map(o => o.value);
}
