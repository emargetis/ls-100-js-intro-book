let multiply = (num1, num2) => num1 * num2;

function solicitInput(promptPhrase) {
  let rlSync = require('readline-sync');
  return rlSync.question(promptPhrase);
}

let firstValue =  solicitInput('Enter the first number: ');
let secondValue =  solicitInput('Enter the second number: ');

console.log(`${firstValue} * ${secondValue} = ${multiply(firstValue, secondValue)}`);