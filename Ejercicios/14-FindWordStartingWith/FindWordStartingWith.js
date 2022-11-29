//----------------Solución fuerza bruta--------------
// function FindWordStartingWith (book, query) {
//   // 
//   const txt = book.text.toLowerCase() // "erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas"
//   query = query.toLowerCase() // "un"
//   const result = [] // []

//   for(let i = 0; i < txt.length; i++){
//     // "E r a s e  u n a  v e z  u n  l i b r o  d e  p a l a b r a s  q u e  era un poco aburrido pero tenia mucho aunque algunas palabras locas"
//     //                ^

//     const sliced = txt.slice(i, i + query.length) // (6, 8) --> 'un'
//     // console.log(sliced);

//     if(sliced === query && (txt[i - 1] === ' ' || i === 0)) result.push(i)
//     //                      txt[5] === ' ' ??? 
//   }

//   return result
// }
// complejidad -> O(n*m)

//-----------------Solución refactor-----------------
function FindWordStartingWith(book, query) {
  const txt = book.text.toLowerCase() // "erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas"
  query = query.toLowerCase() // "un"
  const result = [] // [6]

  for (let i = 0; i < txt.length; i++) {
    // "e r a s e  u n a  v e z  u n  l i b r o  d e  p a l a b r a s  q u e  era un poco aburrido pero tenia mucho aunque algunas palabras locas"
    //               i


    if (i === 0 || txt[i - 1] === ' ') { // txt[5] === ' ' ???

      for (let j = 0; j < query.length; j++) {
        //  'u n'
        //     j

        if (query[j] !== txt[i + j]) { // n !== n
          i = i + j // i = 0
          break
        }
        if (j === query.length - 1) { // 1 === 1
          result.push(i)
          i = i + j // i = 7
        }
      }
    }
  }
  return result
}
// complejidad -> O(n)


const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
};

console.log(FindWordStartingWith(book, "de")) // ([23]);
console.log(FindWordStartingWith(book, "un")) // ([6, 14, 43]);
console.log(FindWordStartingWith(book, "franco")) // ([]);
console.log(FindWordStartingWith(book, "era")) // ([0, 39]);



module.exports = FindWordStartingWith