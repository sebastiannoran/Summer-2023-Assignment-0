class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, start = 0, end = nums.length-1) {
    if (start > end) {
      return false;
    }
    let mid = Math.floor((start+end)/2);

    if (nums[mid] === target) {
      return true
    } else if (target < nums[mid]) {
      return this.binarySearch(nums, target, start, mid-1);
    } else {
      return this.binarySearch(nums, target, mid+1, end)
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;