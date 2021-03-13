/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
  let numString = num.toString();
  //If the the string.length === 1 it means 
  //that the number only has one digit
  if (numString.length > 1) {
    let processed = numString
      .split('')
      .reduce((product, current) => { return product * parseInt(current) }, 1);
    console.log(processed);
    return (processed.toString().length === 1 ? 1 : 1 + persistence(processed))
  }
  else //Returns 0 when starting number only has one digit
    return 0;
}

console.log(persistence(999));

