function longUpper (param) {
  if (param.length > 10) {
    return param.toUpperCase();
  } else {
    return param;
  }
}
//Could have also written a ternary expression


console.log(longUpper('hello world'));
console.log(longUpper('hello'));