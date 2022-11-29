// function MaxValue (shares) {
//   // Your code here:

//   let value = -Infinity // 9

//   for(let i = 0; i < shares.length - 1; i++){
//     // [4, 3, 2, 5, 11]
//     //           ^   

//     const buy = shares[i] // 5

//     for(let j = i + 1; j < shares.length; j++){
//       // [4, 3, 2, 5, 11]
//       //                 ^   

//       const sell = shares[j] // 11
//       const actualProfit = sell - buy // 11 - 5 = 6

//       if(actualProfit > value) value = actualProfit // 

//     }
//   }

//   return value // 9

// }
// complejidad => O(n^2)

function MaxValue(shares) {

  let maxProfit = -Infinity // 
  let minValue = shares[0] // 2

  for (let i = 1; i < shares.length; i++) {
    // [4, 3, 2, 5, 11]
    //                 ^  
    const sell = shares[i] // 
    const actualProfit = sell - minValue // 
    if (actualProfit > maxProfit) maxProfit = actualProfit
    // if( sell < minValue ) minValue = sell
    minValue = sell < minValue ? sell : minValue
  }

  return maxProfit // 9

}
// complejidad => O(n)

console.log(MaxValue([4, 3, 2, 5, 11])) // (9);
console.log(MaxValue([23, 7, 3, 4, 8, 6])) // (5);

module.exports = MaxValue