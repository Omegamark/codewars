var uniqueInOrder=function(iterable){
 var strArray = [];
 strArray = iterable.split('');
 strArray.sort(function(a, b) {
 console.log(a, b)
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
 console.log(strArray)

}

Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
