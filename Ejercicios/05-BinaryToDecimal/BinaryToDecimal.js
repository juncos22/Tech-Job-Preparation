//---------------Solución fuerza bruta--------------
// function BinaryToDecimal (binary) {
//   // num * 2 ** i

//   binary = binary.split('').reverse()

//   let result = 0

//   for(let i = 0; i < binary.length; i++){
//     const num = binary[i]
//     result = result + num * 2 ** i
//   }

//   return result

// }

//---------------Solución fuerza bruta - refactor --------------
// function BinaryToDecimal (binary) {
//   // num * 2 ** i

//   binary = binary.split('').reverse()

//   let result = 0

//   binary.forEach((num, i) => {
//     result += num * 2 ** i
//   })

//   return result
// }

//---------------Solución re-refactor --------------
// function BinaryToDecimal (binary) {
//   // num * 2 ** i

//   return binary
//     .split('')
//     .reverse()
//     .reduce((result, num, i) => (result + num * 2 ** i), 0)
// }


//---------------Solución recursión --------------
// function BinaryToDecimal(binary){
//   // num * 2 ** i
  
//   const num = binary[0]
  
//   const result = num * 2 ** (binary.length - 1)

//   const rest = binary.slice(1)

//   if(rest) return result + BinaryToDecimal(rest)
//   else return result
// }


//---------------Solución recursión - refactor --------------
function BinaryToDecimal(binary){
  // num * 2 ** i
    
  const result = binary[0] * 2 ** (binary.length - 1)
  const rest = binary.slice(1)

  return rest 
    ? result + BinaryToDecimal(rest) 
    : result
}




console.log(BinaryToDecimal("10")) // (2);

console.log(BinaryToDecimal("111")) // (7); 




module.exports = BinaryToDecimal
