//-----------Solución fuerza bruta-------------
// function intersection (arr1, arr2) {

//   let result = []

//   for(const num1 of arr1){
//     for(const num2 of arr2){
//       if(num1 === num2) result.push(num1)
//     }
//   }
//   return result
// }
// complejidad -> O(n*m)

//-----------Solución fuerza bruta - refactor-------------
// function intersection(arr1, arr2){
//   let result = []

//   for(const num1 of arr1){
//     if(arr2.includes(num1)) result.push(num1)
//   }

//   return result
// }
// complejidad -> O(n*m)


//-----------Solución fuerza bruta - re-refactor-------------
// function intersection(arr1, arr2){
//   return arr1.filter(num1 => arr2.includes(num1))
// }
//complejidad -> O(n*m)


//-----------Solución refactor - bajando complejidad-------------
// function intersection(arr1, arr2){

//   let i = 0
//   let j = 0
//   let result = [] // [3, 10]

//   while(i < arr1.length && j < arr2.length){
//     // [1, 3, 5, 7, 10]
//     //                  i

//     // [2, 3, 6, 8, 10, 20]
//     //                  j
//     const num1 = arr1[i] // 10
//     const num2 = arr2[j] // 10

//     if(num1 === num2){
//       result.push(num1)
//       i++
//       j++
//     }
//     else if(num1 < num2) i++
//     else j++
//   }
//   return result // [3, 10]
// }
// complejidad -> O(n+m)


//-----------Solución usando estructuras de datos - bajando complejidad-------------
// function intersection(arr1, arr2){
//   const hashMap = {} // {1: true, 3: true, 5: true, 7: true, 10: true}
//   let result = [] // [3, 10]

//   for(const num1 of arr1) hashMap[num1] = true
//   // [1, 3, 5, 7, 10]

//   for(const num2 of arr2){
//     // [2, 3, 6, 8, 10, 20]
//     //                     ^
//     if(hashMap[num2]) result.push(num2)
//   }

//   return result // [3, 10]
// }
//complejidad -> O(n+m)

//-----------Solución usando estructuras de datos - bajando complejidad (refactor)-------------
// function intersection(arr1, arr2){
//   const hashMap = {}
//   for(const num1 of arr1) hashMap[num1] = true
//   console.log(hashMap);
//   return arr2.filter(num2 => hashMap[num2])
// }
//complejidad -> O(n+m)


//-----------Solución usando estructuras de datos - array asociativo-------------
// function intersection(arr1, arr2){
//   const arrayAsociativo = []
//   for(const num1 of arr1) arrayAsociativo[num1] = true
//   return arr2.filter(num2 => arrayAsociativo[num2])
// }
// complejidad -> O(n+m)

//-----------Solución usando estructuras de datos - MAP ES6-------------
function intersection(arr1, arr2) {
  const hashMap = new Map
  for (const num1 of arr1) hashMap.set(num1, true)
  return arr2.filter(num2 => hashMap.get(num2))
}
// complejidad -> O(n+m)


// ORDENADOS
console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])) // ([3, 10])
console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])) // ([]);

// DESORDENADOS
console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])) // 





module.exports = intersection