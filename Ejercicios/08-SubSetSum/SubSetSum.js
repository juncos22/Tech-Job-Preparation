function subSetSum(nums, target) {
  // target: 9

  const sums = new Set([0]) // [0, 1, 5, 6, 3, 4, 8]

  for (const num of nums) {
    // nums: [1, 10, 5, 3]
    //                  ^
    const sumsCopy = [...sums] // [0, 1, 5, 6]
    //                                      ^

    for (const sum of sumsCopy) {
      const actualSum = sum + num // 6 + 3 => 9

      if (actualSum === target) return true // 9 === 9 ???
      if (actualSum < target) sums.add(actualSum) // 8 < 9 ??? 
    }
  }
  return false
}
// complejidad -> O(2^n)



console.log(subSetSum([1, 10, 5, 3], 9))  // (true);
// console.log(subSetSum([1, 10, 5, 3], 19))  // (true);
// console.log(subSetSum([1, 10, 5, 3], 2))  // (false);
// console.log(subSetSum([1, 10, 5, 3], 10))  // (true);



module.exports = subSetSum