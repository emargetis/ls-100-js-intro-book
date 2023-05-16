function multiply(left, right) { //Variables: multiply, left, right
  let product = left * right; //Variables: product, left, right
  return product; //Variables: product
}

function getNumber(prompt) { //Variables: getNumber, prompt
  return parseFloat(question(prompt)); //Variables: parseFloat, question (not a real built-in function), prompt 
}

let left = getNumber('Enter the first number: '); //Variables: left, getNumber
let right = getNumber('Enter the second number: '); //Variables: right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //Variables: console, left, right, multiply, left, right