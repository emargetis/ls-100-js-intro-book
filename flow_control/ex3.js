function evenOrOdd (param) {
  if (typeof param !== 'number'){
    console.log('Please enter a number');
    return;
  }
  
  if (param % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}