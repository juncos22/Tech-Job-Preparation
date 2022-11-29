//---------------------- Solución fuerza bruta------------------
// function DecimalToBinary (num) {

//   const binary = []

//   while( num > 0 ){
//     const module = num % 2
//     console.log(module);

//     binary.push(module)
//     console.log(binary);

//     num = Math.floor(num / 2)
//   }

//   return binary.reverse().join('')
// }

//---------------------- Solución fuerza bruta - con unshift nos ahorramos el reverse------------------
// function DecimalToBinary (num) {
//   // Math.floor(num % 2) / 2 + ''

//   const binary = []

//   while( num > 0 ){
//     const module = num % 2
//     console.log(module);

//     binary.unshift(module)
//     console.log(binary);

//     num = Math.floor(num / 2)
//   }

//   return binary.join('')
// }


//---------------------- Solución fuerza bruta - refactor------------------
// function DecimalToBinary (num) {

//   let binary = ''

//   while( num ){

//     binary = num % 2 + binary

//     num = Math.floor(num / 2)
//   }

//   return binary
// }


//---------------------- Solución - recursión------------------
// function DecimalToBinary(num){

//   const module = num % 2

//   if(num) return DecimalToBynary(Math.floor(num / 2)) + module
//   return ''

// }


//---------------------- Solución - recursión / refactor------------------
function DecimalToBinary(num) {

  return num ? DecimalToBinary(Math.floor(num / 2)) + num % 2 : ''

}

console.log(DecimalToBinary(4)) // ("100");

console.log(DecimalToBinary(7)) // ("111");



module.exports = DecimalToBinary
