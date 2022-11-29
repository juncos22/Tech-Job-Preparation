//------Con esta primer solución falta que acepte múltiples argumentos------
function spyOn(fn) {
  let callCount = 0;

  const calledWith = new Map
  const returned = new Map

  const spy = (n1, n2) => {
    callCount++; // 
    calledWith.set(n1, true)
    calledWith.set(n2, true)
    returned.set(fn(n1, n2), true)

    return fn(n1, n2)
  }

  spy.getCallCount = () => callCount

  spy.wasCalledWith = (value) => {
    if (calledWith.get(value)) return true
    else return false
  }

  spy.returned = (value) => {
    if (returned.get(value)) return true
    else return false
  }

  return spy
}


//----------------Solución múltiples args + refactor--------------
// function spyOn (fn) { // fn = (n1, n2) => n1 + n2
//   // 
//   let callCount = 0; // 3

//   const calledWith = new Map // Map {2 => true, 3 => true, 4 => true, 5 => true, 6 => true}
//   const returned = new Map // Map {5 => true, 9 => true, 11 => true}

//   const spy = (...args) => { // (5, 6)
//     callCount++; // 
//     for(const arg of args) calledWith.set(arg, true)
//     const result = fn(...args)
//     returned.set(result, true)

//     return result // 11
//   }

//   spy.getCallCount = () => callCount // 3

//   spy.wasCalledWith = (value) => !!calledWith.get(value) // 2

//   spy.returned = (value) => !!returned.get(value)

//   return spy
// }


const adder = (n1, n2) => n1 + n2

const adderSpy = spyOn(adder) // spy = (n1, n2) => {...}


// console.log(adderSpy(4, 5)); // (3) 

// console.log(adderSpy.getCallCount()) // (0);
// adderSpy(2, 3);
// console.log(adderSpy.getCallCount()) // (1);
// adderSpy(4, 5);
// adderSpy(5, 6);
// console.log(adderSpy.getCallCount()) // (3);

adderSpy(2, 3);
console.log(adderSpy.wasCalledWith(2)) // (true);
console.log(adderSpy.wasCalledWith(3)) // (true);

// adderSpy(2, 3);
// console.log(adderSpy.wasCalledWith(4)) // (false);
// console.log(adderSpy.wasCalledWith(5)) // (false);


// adderSpy(2, 3);
// adderSpy(2, 4);
// console.log(adderSpy.returned(5)) // (true);
// console.log(adderSpy.returned(6)) // (true);

adderSpy(2, 3);
console.log(adderSpy.returned(6)) // (false);
console.log(adderSpy.returned(7)) // (false);

module.exports = spyOn