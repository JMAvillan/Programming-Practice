const franc = require('franc');
const lang = require('langs');
const arg = process.argv[2];

const langGuess = franc(arg);

if (langGuess !== 'und' && lang.has(langGuess)) {
  let { name } = lang.where('2T', langGuess);
  console.log(`Language Guess: ${name}`);
}
else {
  console.log("Undertermined.")
}
