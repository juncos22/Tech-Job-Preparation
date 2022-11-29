function longestIncreasingSubsequence(nums) {
  // [3, 10, 4, 5]
  //  ^

  const sequences = [] // [ [3], [10], [3, 10], [3, 4], [3, 5], [3, 4, 5] ]
  let longest = 0 // 3

  for (const num of nums) {   // [3, 10, 4, 5]
    //             ^

    const sequencesCopy = [...sequences] // [ [3], [10], [3, 10], [3, 4] ]
    sequences.push([num])

    for (const seq of sequencesCopy) { // [ [3], [10], [3, 10], [3, 4] ]
      //                            ^

      if (num > seq[seq.length - 1]) { // 5 > 4
        const newSequence = [...seq, num] // [3, 4, 5]

        sequences.push(newSequence)

        if (newSequence.length > longest) longest = newSequence.length
      }

    }
  }
  return longest // 3
}
// complejidad -> O(n*m)


console.log(longestIncreasingSubsequence([3, 10, 4, 5])) // (3);
console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])) // (3);
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])) // (6);
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28])) // (9);


module.exports = longestIncreasingSubsequence