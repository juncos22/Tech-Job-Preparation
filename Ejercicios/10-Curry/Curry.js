function curry(fn) { // 

  const args = [] // [1, 2, 3, 4]

  return function ft31(currentArg) {
    args.push(currentArg)

    if (fn.length === args.length) return fn(...args)

    return (nextArg) => ft31(nextArg)
  }
}

const calcAllFour = (var1, var2, var3, var4) => { // 1, 2, 3, 4
  return var1 + var2 - var3 * var4;
};

const curriedCalcAllFour = curry(calcAllFour)
// function ft31 (currentArg) {
//   args.push(currentArg)

//   if (fn.length === args.length) return fn(...args)

//   return function (nextArg){
//     return ft31(nextArg)
//   }

// }
const curriedOne = curriedCalcAllFour(1)
// function (nextArg){
//   return ft31(nextArg)
// }
const curriedTwo = curriedOne(2)
// function ft31 (currentArg) {
//   args.push(currentArg)

//   if (fn.length === args.length) return fn(...args)

//   return function (nextArg){
//     return ft31(nextArg)
//   }
// }
const curriedThree = curriedTwo(3)
// function ft31 (currentArg) {
//   args.push(currentArg)

//   if (fn.length === args.length) return fn(...args)

//   return function (nextArg){
//     return ft31(nextArg)
//   }
// }


console.log(curriedThree(4));



//------------Ejemplo con 1 arg------------
// const one = (a) => a + 9
// const curriedOne = curry(one)
//                   // function (a) {
//                   //   return fn(a)
//                   // }

// console.log(curriedOne(2))


//-----------Ejemplo con 2 args----------------
// const two = (a, b) => a + b
// const curriedTwo = curry(two)
//                   // function (a) {
//                   //   return function(b){
//                   //     return fn(a, b)
//                   //   }
//                   // }
// const callTwo = curriedTwo(2)
//                 // function(b){
//                 //   return fn(a, b)
//                 // }


// console.log(callTwo(3));




module.exports = curry