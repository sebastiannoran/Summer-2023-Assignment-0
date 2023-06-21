function frequencyCounter(word) {
  let frequency = {};

  for (let i = 0; i < word.length; i++) {
    let alphabet = word[i];
    // assume alphabet letter is inplace
    if (frequency[alphabet]) {
      frequency[alphabet] += 1;
    } else { // if not, then create the freq counter starting @ 1
      frequency[alphabet] = 1
    }
  }
  return frequency
}
// Do not edit this line;
module.exports = frequencyCounter;