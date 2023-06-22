function productOfAnyAmountOfNumbers(...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;