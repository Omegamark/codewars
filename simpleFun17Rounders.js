// var num = 1445 should == 2000 when done since each integer gets rounded individually.
// Use a recursive while loop to make this happen.



var number = 12354987
function rounders(value) {

    var output = []
    var sNumber = value.toString();

for (var i = 0; i < sNumber.length; i ++) {
    output.push(Math.round(+sNumber.charAt(i)));

}

console.log(output);


}

rounders(number);
