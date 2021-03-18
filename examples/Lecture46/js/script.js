// // Functions are First-Class Data Types
// // Functions ARE objects
// function multiply(x, y) {
//   return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//      return multiplier * x;
//     };
//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(12));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(1000));

// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(1000, doubleAll);
// console.log(result);

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  return myFunFunc;
}

var operation = makeMultiplier (10);
console.log(operation (10));


