function countOfAllBooleans(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === true || arr[i] === false) {
      counter += 1;
    }

  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;