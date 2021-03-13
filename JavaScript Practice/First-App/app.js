function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medals goes to: ${gold}\nSilver medal: ${silver}\nAnd thanks to everone else ${everyoneElse.forEach((el) => console.log(`${el}\n`))}`)

}