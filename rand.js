var numLessThan5 = 0;
var numGreaterOrEqualTo5 = 0;

for (var i = 0; i < 100; i++) {
    var ran = Math.random() * 10;

    if (ran < 5) {
        numLessThan5 += 1;
    }
    else {
        numGreaterOrEqualTo5 += 1;
    }
}

console.log("Number less than 5 " + numLessThan5.toString());
console.log("Number greater than or equal to 5 " + numGreaterOrEqualTo5.toString());