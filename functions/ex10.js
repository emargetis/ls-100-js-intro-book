function multiply(left, right) { //Variables: multiply(global), left(local), right(local)
  let product = left * right; //Variables: product(local), left(local), right(local)
  return product; //Variables: product(local)
}

function getNumber(prompt) { //Variables: getNumber(global), prompt(local)
  return parseFloat(question(prompt)); //Variables: parseFloat(global), question (global - not a real built-in function), prompt(local) 
}

let left = getNumber('Enter the first number: '); //Variables: left(global), getNumber(global)
let right = getNumber('Enter the second number: '); //Variables: right(global), getNumber(global)
console.log(`${left} * ${right} = ${multiply(left, right)}`); //Variables: console(global), left(global), right(global), multiply(global), left(global), right(global)
