function Node(value) { // 4
  this.min = Infinity // 1
  this.value = value; // 4
  this.next = null;
}

function MinStack() {
  this.top = null;
}


MinStack.prototype.push = function (value) { // 1
  const previousTop = this.top // {value: 4, next: null, min: 4}
  this.top = new Node(value) // {value: 1, next: null}
  this.top.next = previousTop // {min: 1, value: 1, next: { min: 4, value: 4, next: null}}

  if (!previousTop) this.top.min = value
  else if (value < previousTop.min) this.top.min = value
  else this.top.min = previousTop.min
}

MinStack.prototype.pop = function () {
  const popped = this.top // {value: 1, next: {value: 4, next: null} }
  this.top = this.top.next // {value: 4, next: null}
  return popped.value // 1
}

MinStack.prototype.peek = function () {
  return this.top.value // 4
}

//----Este método es correcto en primera instancia pero no cumple con el readme------
// // { value: 2 next: {value: 3, next: {value: 1, next: {value: 4, next: null} } } }
// MinStack.prototype.min = function() {
//   let min = Infinity // 1
//   let current = this.top // { value: 2 next: {value: 3, next: {value: 1, next: {value: 4, next: null} } } }

//   while(current.next){ // {value: 4, next: null} 
//     if(current.value < min) min = current.value
//     current = current.next
//   }

//   return min // 1
// }

MinStack.prototype.min = function () {
  return this.top.min // 1
}

const node = new Node(4)
const minStack = new MinStack()

console.log(minStack);
minStack.push(4)
console.log(minStack);
minStack.push(1)
console.log(minStack);
minStack.push(3)
minStack.push(2)

minStack.pop()
console.log(minStack);

minStack.peek()
console.log(minStack.peek());



module.exports = {
  Node,
  MinStack
}