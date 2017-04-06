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


// This one actually works. The above attempt had to scrapped

actual = [ 23, 2, 3, 4, 5 ];
//
// function sortByValueAndIndex(array) {
//   // create 2nd arrray to compare
//   var newArray = [];
//   var referenceArray = [];
//   var goddamnedAnswer = [];
//   // iterate through array
//   array.map(function(value, index, array) {
//     // console.log('this is actually the index', index);
//     // console.log('this is actually the value', value);
//     // console.log('array!!', array);
//     // multiply the index by the value, using a 1 value
//     // console.log(value * (array.indexOf(value) + 1));
//     newArray.push(value * (array.indexOf(value) + 1));
//     // console.log('this is the new array', newArray);
//     return newArray;
//   });
//
//   for (i = 0; i < newArray.length; i++) {
//     referenceArray.push(newArray[i]);
//   }
//
//   newArray.sort(function(a, b) {
//     return a-b;
//   })
//
//   // console.log(newArray)
//   // console.log(referenceArray)
//
//     newArray.map(function(value, index, array) {
//     // console.log(value)
//     // console.log(index)
//     // console.log(array)
//     // console.log(referenceArray)
//     // console.log('fucking work', value / (referenceArray.indexOf(value) + 1));
//     goddamnedAnswer.push(value / (referenceArray.indexOf(value) + 1));
//     // console.log('this is the goddamnedAnswer', goddamnedAnswer)
//     return goddamnedAnswer;
//
//   })
//   return goddamnedAnswer;
// }

// Expected: [-30, -25, -30, -9, -12, -17, -27, -5, 26, 18, 16, 8, 12, 26, 26]

// sortByValueAndIndex(actual);
// sortByValueAndIndex([ 26, -54, 54, -68, -150, -72, 112, -200, -150, -50, 26, 144, -117, 26 ]);
sortByValueAndIndex(actual);

function sortByValueAndIndex(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i] * (i + 1));
  }
  let ans = mySort(newArray, array);
  console.log(ans);
  return ans;
}

function mySort(array, arrayb) {
  let indexArray = [];
  for(let i = 0; i < array.length; i++) {
    indexArray.push(i);
  }

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] > array[j]) {
        let temp = array[i];
        let tempB = indexArray[i]
        array[i] = array[j]
        array[j] = temp;
        indexArray[i] = indexArray[j]
        indexArray[j] = tempB;
      }
    }
  }

  let answer = [];
  for(let i = 0; i < indexArray.length - 1; i++) {
    answer.push(arrayb[indexArray[i]]);
  }

  return answer;
}
