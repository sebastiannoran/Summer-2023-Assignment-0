function setUnionOfAnyAmountOfSets(...args) {
    let result = new Set();

    for (let i = 0; i < args.length; i++) {
      let set = args[i];
      let values = Array.from(set); // make an array based of set from arg[0], arg[1]...
      for (let j = 0; j < values.length; j++) {
        result.add(values[j]); // take values from array and place back into result
      }
    }
    return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;