function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function (value) {
    if (typeof (value) === "number") {
      return true;
    }
  });
}
let inputArray = filter_list([0, 4, 5, 2, 'b', 3, 'a'])
console.log(inputArray);
