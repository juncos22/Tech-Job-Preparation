function FindNeedle(haystack, needle) {

    for (let i = 0; i < haystack.length; i++) {
        console.log(haystack[i]);


        for (let j = 0; j < needle.length; j++) {

            if (needle[j] !== haystack[i + j]) break

            if (j === needle.length - 1) return i
            // 4 === 4 => 6
        }
        // haystack = react-redux
        //                  i
        //                      ^

        // needle = redux
        //              j
    }
    return -1;
}
/// O(n*m)



function FindNeedle(haystack, needle) {

    for (let i = 0; i < haystack.length; i++) {
        const sliced = haystack.slice(i, i + needle.length)

        if (sliced === needle) return i; // 6

        // haystack = react-redux
        //                  i
        //

        // sliced = redux
    }
    return -1;
}
/// O(n*m)



// recorrer el hay haystack (cada letra)
// por cada letra ver si coincide con la primera del needle
//si coincide seguimos recorriendo el needle
//si no coincide, descartamos y continúa
//si llegamos al final => lo encontramos y devolvemos el índice
// si no encontramos, retornamos -1



console.log(FindNeedle('react-redux', 'redux')) // (6)
console.log(FindNeedle('pinky', 'puntual')) // (-1)
console.log(FindNeedle('rereredux', 'reredux')) // (2)

module.exports = FindNeedle;