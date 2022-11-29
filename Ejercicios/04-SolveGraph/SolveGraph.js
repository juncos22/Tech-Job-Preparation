// function SolveGraph (graph, start, end, visited = []) {
//   // Your code here:
//   // 1° vuelta
//   // graph: {...}, start: 'a', end: 'r', visited = ['a']
//   // 2° vuelta
//   // graph: {...}, start: 'c', end: 'r', visited = ['a', 'c']
//   // 3° vuelta
//   // graph: {...}, start: 's', end: 'r', visited = ['a', 'c', 's']
//   //------------------------------------ 4° y 5° vuelta son el array de 's'
//   // ----------------------------------// 4° vuelta
//   // ----------------------------------// graph: {...}, start: 'a', end: 'r', visited = ['a', 'c', 's']
//   //-----------------------------------// 5° vuelta
//   //-----------------------------------// graph: {...}, start: 'c', end: 'r', visited = ['a', 'c', 's']
//   // 6° vuelta
//   // graph: {...}, start: 'r', end: 'r', visited = ['a', 'c', 's', 'r'] true

//   if(visited.includes(start)) return false
//   visited.push(start)
//   console.log(visited);

//   for(const node of graph[start]){ //  ["s", "r"]
//     console.log(node);
//     if(node === end) return true // 'r' === 'r' ???

//     if(SolveGraph(graph, node, end, visited)) return true
//     // 
//   }

//   return false
// }


function SolveGraph(graph, start, end, visited = {}) {

  if (visited[start]) return false
  visited[start] = true
  console.log(visited);

  for (const node of graph[start]) {
    if (node === end) return true

    if (SolveGraph(graph, node, end, visited)) return true
  }

  return false
}


const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};


console.log(SolveGraph(graph, "a", "r")) // (true);
console.log(SolveGraph(graph, "a", "d")) // (true);
console.log(SolveGraph(graph, "s", "b")) // (false);

module.exports = SolveGraph