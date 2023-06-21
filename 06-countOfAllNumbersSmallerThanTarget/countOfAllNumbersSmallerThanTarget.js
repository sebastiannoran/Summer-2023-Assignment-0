function countOfAllNumbersSmallerThanTarget(nums, target) {
  let counter = 0;

  for (let i = 0; i<nums.length; i++) {
    if (nums[i] < target) {
      counter += 1;
    }
  }
  return counter
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;