// -------------- Solución fuerza bruta ---------------
// function HasBalancedBrackets (string){
//   // "{[]()}"
//   const validOpeningBrackets = ['{', '[', '('];
//   const validClosingBrackets = ['}', ']', ')'];

//   const openBrackets = []; // ['{', '[']

//   for(let i = 0; i < string.length; i++){
//     // "{ [ ] ( ) }"
//     //      i
//     const bracket = string[i]; // ']'

//     if(validOpeningBrackets.includes(bracket)) openBrackets.push(bracket);

//     if(validClosingBrackets.includes(bracket)){

//       const index = validClosingBrackets.indexOf(bracket); // 1

//       const brotherBracket = validOpeningBrackets[index]; // '['

//       const lastOpen = openBrackets[openBrackets.length - 1]; // '['

//       if(lastOpen === brotherBracket) openBrackets.pop(); // '[' === '['
//       else return false;
//     }
//   }

//   if(openBrackets.length) return false;
//   else return true;
// };



// -------------- Solución fuerza bruta (refactor) ---------------
// function HasBalancedBrackets (string){

//   const openBrackets = [];
//   const validBrackets = {
//     '{' : '}',
//     '[' : ']',
//     '(' : ')'
//   };

//   for(let i = 0; i < string.length; i++){
//     const bracket = string[i];

//     if(validBrackets[bracket]) openBrackets.push(bracket);
//     else{
//       const lastOpen = openBrackets[openBrackets.length - 1];
//       if(validBrackets[lastOpen] === bracket) openBrackets.pop();
//       else return false
//     }
//   }

//   if(openBrackets.length) return false;
//   else return true;
// };



// -------------- Solución corta ---------------
// function HasBalancedBrackets (string){

//   const openBrackets = [];
//   const validBrackets = {
//     '{' : '}',
//     '[' : ']',
//     '(' : ')'
//   };

//   for(let i = 0; i < string.length; i++){
// "{ [ ] ( ) }"
//        i
//     const bracket = string[i]; // ]

//     if(validBrackets[bracket]) openBrackets.push(bracket);
//     else if(validBrackets[openBrackets.pop()] !== bracket) return false;
//          validBrackets['['] ---> me da su value => ']'
//                            ']' !== ']'
//   }

//   return !openBrackets.length;
// };


// -------------- Solución aún más corta CLEAN CODE ---------------
function HasBalancedBrackets(string) {

  if (string.length % 2) return false;

  const openBrackets = [];
  const validBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (const bracket of string) {
    if (validBrackets[bracket]) openBrackets.push(bracket);
    else if (validBrackets[openBrackets.pop()] !== bracket) return false
  }

  return !openBrackets.length;
}

/// complejidad => O(n) en todas las soluciones


console.log(HasBalancedBrackets("[]")) // (true);

console.log(HasBalancedBrackets("{[(])}")); // (false);
console.log(HasBalancedBrackets("{[]()}")) // (true);
console.log(HasBalancedBrackets("{[(")) // (false);
console.log(HasBalancedBrackets("{[([{()[]{}}])]}")) // (true);
console.log(HasBalancedBrackets("{[]}}")) // (false);

module.exports = HasBalancedBrackets