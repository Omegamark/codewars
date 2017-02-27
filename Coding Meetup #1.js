var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
  var count = 0
  for (var i = 0; i < list.length; i++) {
    if(list[i].continent == 'Europe' && list[i].language == 'JavaScript') {
      count++
  }

}
  return count
}

//Higher Order example taken from CodeWars
function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

function countDevelopers(a) {
  return a.filter(d => d['continent'] === 'Europe' && d['language'] === 'JavaScript').length;
}

function countDevelopers(list) {
  let count = 0;
  list.map(person => {
    if(person.continent === 'Europe' && person.language === 'JavaScript') count++;
  });
  return count;
  }
