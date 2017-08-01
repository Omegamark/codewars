var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list) {


var answer = list.find(function (x) {
  return x.language == "Python"
  // console.log(x.language)
})

if (answer) {
  return `${answer.firstName}, ${answer.country}`

} else {
return 'There will be no Python developers'
 }
}
