function countOfAllIndexMatchingNumbers(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      counter += 1;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;