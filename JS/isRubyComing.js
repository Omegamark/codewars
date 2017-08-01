var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];


list1.forEach(checkLang);


function checkLang(x) {
  for (var prop in x) {
    // console.log('This is Prop', prop)
    // console.log('This is Obj', x)
    if (x[prop.language] == 'Ruby') {
      return true
    }
    console.log(x.language)
    // if (x.language == 'Ruby') {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

// solution using find() **Working
function isRubyComing(list) {
  let solution;
  list.find(function(x) {
    console.log(x.language)

    if (x.language === 'Ruby') {
      solution = true;
      return solution;

    } else {
      solution = false;
      return solution;

    }

  });
  return solution
}

// Best solutions from codewars

// Solution 1
function isRubyComing(list) {
  return list.some(e => e.language === 'Ruby');
}

// Solution 2
function isRubyComing(list) {
  return list.some(x => x.language === 'Ruby');
}
