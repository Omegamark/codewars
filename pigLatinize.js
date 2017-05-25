var test = "Pig latin is cool";
var test2 = 'This is my string';

function pigIt(str){
  // Function Split the string into separate words
  let wordArray = splitString(str);
  // Function to pig latinize the individual words
  return pigLatinize(wordArray)
  // Concatenate and return
}






function splitString (string) {
  return string.split(" ");
}

function pigLatinize (words) {
  // Instantiate a temporary variable, however this may be useless if using a forEach
  let temp = "";
  // Instantiate a new array to store the pigLatinized words before concatenating
  let tempArray = [];
  // Use a forEach to iterate and modify the words to pigLatin
  words.forEach(function (word, index) {

    // Get the letter at the 0 index
    // Add the first letter of the word to the end of the word
    // Slice the letter off of the beginning of the word
    tempArray.push(word.substring(1, word.length) + word.charAt().toLowerCase() + 'ay');
    return tempArray
    // tempArray.push(word.charAt().slice(0, 1));




  });

  console.log(words)
  return tempArray.join(' ');

}


pigIt(test2)

// Best in

function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
