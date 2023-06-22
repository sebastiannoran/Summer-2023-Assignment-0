function pairSum(nums, target) {

  if (nums.length <= 1) {
    throw new Error("less than or equal to 1");
  }
  for (let i = 0; i < nums.length-1; i ++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;