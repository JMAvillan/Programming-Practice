function alphabetPosition(text) {
  return text.toLowerCase().split('') //Split string and store characters on an array
    .filter(letter => {
      letter >= 'a' & c <= 'z' //Only add values that are between a and z
    })                         //No whitespaces or special characters
    // Create new array with results of this function execution
    // To convert: Get character code of the inserted letter
    // and subsctracted the charater code of the letter a
    // By subsctracting the letter with the beginning of the alphabet we 
    // know how far the current letter is from 'a'.
    // Add 1
    .map(letter => {
      letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    })
    .join(' '); //Join the indeces of the array onto one cohesive string.
}