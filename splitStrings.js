function solution(str){
   // if the string %2 === 0,
   if (str.length % 2 === 0) {
     // divide the string by the number
     var limiter = str.length/2;
     var splitString = str.match(/.{1,2}/g);
   }
   console.log(splitString);
   // else divide by the string
   // map the numbers to the indices of the characters
   // divide the characters into groups of 2 and push into an array
   // return the array
}

solution('fasdfads');
