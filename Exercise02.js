// Exercise 02 //

/*Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

console.log("Exercise 02.js")

function doubleArray(arr) {
    let doubledArray = arr.map(num => num * 2);
    console.log(doubledArray);
  }
  
  // Ejemplo de aplicación:
  let numbers = [1, 2, 4, 5];
  doubleArray(numbers);  // Salida: [2, 4, 8, 10]
  
 