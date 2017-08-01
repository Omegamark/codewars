var test = ["zone", "abigail", "theta", "form", "libe", "zas"];
var test2 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
var test3 = [];

function longestConsec(strarr, k) {

 let solution;
  // kick out of function if k <= 0
  if (k <= 0) {
     strarr = "";
     return strarr;
    }

  // This is almost definately unnecessary
  for (var i = 0; i < strarr.length; i++) {
    if (strarr[i].length > k) {
      i++;
    } else {
      strarr = "";
      return strarr;
    }
  }

  console.log('this is strarr', strarr);

  if (strarr === []) {
    solution = "";
    return solution;
  } else {

    var longest = strarr.reduce(function (a, b) { return a.length > b.length ? a : b; });
  }
  console.log('i\'m the longest', longest);


  // Use a while loop and indexOf(longest) to create the concatenated string
  // console.log(strarr[strarr.indexOf(longest)]);
  let count = 1;

  if (k === 1) {
    solution = longest;
  } else {
  while( count < k ) {
    solution = strarr[strarr.indexOf(longest)] += strarr[strarr.indexOf(longest) + count];
    count++;

    }
  }
  return solution;


}


// check the solution
longestConsec(test3, 3);
