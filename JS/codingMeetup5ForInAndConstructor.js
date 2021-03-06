var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];






function countLanguages(list) {
// Instantiate a counter and object to be changed Dynamically
  var solution = {};
  let theObject = list;
  // Creating the solution object to be manipulated
  solution = createObject(theObject);
  // Counting the instances of each language
  languageCount(theObject);
    // console.log(tempCounts)
  return solution;
    // Constructor function for the output object
  function createObject (list) {
    for (var x in list) {
      // Instantiate a variable to store the language names
      var language = list[x].language;
      // Create an if statement to check for multiple instances of the same language and increase a count
      solution[language] = 0;
    }
    return solution;
  }

  // Function for the language counts
  // Function takes in the solution object as an argument
  // Function loops through and counts the instances of each language present
  // Function then replaces the 0's in the object with the cooresponding count for the language
  function languageCount (languageObject) {
    let count = 0;
    let solutionObject = solution;
    for (var i = 0; i < languageObject.length; i++) {
      if(languageObject[i].language) {
        solutionObject[languageObject[i].language]++;
      }
    }
    return solution;
  }
}


countLanguages(list1)

// Best answers from codewars
function countLanguages(list) {
  return list.reduce(function(s, c) {

    if(c.language in s)
      s[c.language]++;
    else
      s[c.language] = 1;

    return s;
  }, {});
}
// Answer # 2
function countLanguages(list) {
  var count = {};
  list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
  return count;
}
