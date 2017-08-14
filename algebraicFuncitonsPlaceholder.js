var a = [1,2,3];
var sum = a.reduce(function(a, b) { return a + b; }, 0) / a.length;
console.log(sum);