function solution(str){
   // if the string %2 === 0,
   if (str.length % 2 === 0) {
     // divide the string by the number
     var limiter = str.length/2;
     var splitString = str.match(/.{1,2}/g);
   } else {
     splitString = str.match(/.{1,2}/g);
     var lastIndex = splitString.pop();
     while (lastIndex.length < 2) {
       lastIndex += '_';
       console.log(lastIndex)
       // Have last index be added to the array
      // console.log(splitString)
      // splitString.pop();
      splitString.push(lastIndex)
       console.log(splitString)
     }
   }
   console.log(splitString);
   return splitString;
   // else divide by the string
   // map the numbers to the indices of the characters
   // divide the characters into groups of 2 and push into an array
   // return the array
}




solution('fasdfadsd');


// Cleaner version of the code above:
function solution(str){
   if (str.length % 2 === 0) {
     var splitString = str.match(/.{1,2}/g);
   } else {
     splitString = str.match(/.{1,2}/g);
     var lastIndex = splitString.pop();
     while (lastIndex.length < 2) {
       lastIndex += '_';
      splitString.push(lastIndex)
     }
   }
   return splitString;
}


// Top codewars solutions:
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

function solution(str){
  if (str.length%2) str += '_';
  return str.match(/.{1,2}/g)
}
