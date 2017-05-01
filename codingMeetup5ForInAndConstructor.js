var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];






function countLanguages(list) {
  var solution = {};
  // Instantiate a counter and object to be changed Dynamically

  // var
  let theObject = list;
  // Creating the solution object to be manipulated
  solution = createObject(theObject);

  // Counting the instances of each language
  languageCount(theObject);
    // console.log(tempCounts)
  return solution;

    // Constructor function for the output object
  function createObject (list) {

    // Create an object using an object
    // Create variables to store the functions which create the key/value pairs for the solution
    // Pass the counting keys into the object as arguments
    // Use a for/in loop to create proper counts
    // Dynamically create the solution properties using the language names

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
  // Function then replaces the null's in the object with the cooresponding count for the language
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
