// Exercise 03 //

/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

console.log("Exercise 03.js")
function computeSumAndProduct(arr) {

    let sum = arr.reduce((acc, num) => acc + num, 0);
    
    let product = arr.reduce((acc, num) => acc * num, 1);
     console.log(`The sum is ${sum}.`);
    console.log(`The product is ${product}.`);
  }
  
  // Ejemplo de uso:
  let numbers = [1, 2, 3, 4];
  computeSumAndProduct(numbers);
  