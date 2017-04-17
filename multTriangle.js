/*
This is almost there, however right now it only sums an array given by n. It needs to get the sum of everything before n. So if n = 5, then the sums from 1, 2, 3, and 4 also need to be calculated and summed.
*/



function multTriangle(n) {
   // Create a variable for the loop which willcreate the arrays
   var looper = Math.pow(n, 2);
  console.log('this is looper', looper)
   // Instantiate the arrays
   var triangleArray = [];
   var evenArray = [];
   var oddArray =[];
   var totalSum = 0;
   var index = 0;
   console.log('this is index', index)
  // var lastInt = 0;
   var nextInt = 0;
   // Create a while loop for the arrays
   while(nextInt < looper) {
     //push integers the first half of the intergers into an array
    // console.log(looper)
     index++;
    // lastInt = n
     triangleArray.push(nextInt += n)
    // console.log(triangleArray)
   }
    // copy the array indices in reverse order and push into the triangleArray
    for (var i = triangleArray.length - 2; i >= 0; i--) {
      triangleArray.push(triangleArray[i])
    }
    // Create a for loop which adds the odds, evens & total and pushes them into an array
    var evenInt = 0;
    var oddInt = 0;
    for (var j = 0; j < triangleArray.length; j++) {
      if(triangleArray[j] % 2 === 0) {
        evenInt += triangleArray[j]
        console.log(triangleArray[j])
        // console.log(evenInt)
      }
    }
    // console.log(evenInt)
    // return triangleArray


}

multTriangle(5)
