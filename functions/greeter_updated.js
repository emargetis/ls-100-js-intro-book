function solicitInput(promptPhrase) {
  let rlSync = require('readline-sync');
  return rlSync.question(promptPhrase);
}

console.log(`Hello, ${solicitInput("What's your first name? ")} ${solicitInput("What's your last name? ")}!`);