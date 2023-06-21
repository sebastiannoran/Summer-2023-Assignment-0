class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, start, end) {
    if (start > end) return -1;
    let mid = math.floor((start+end)/2);

    if (nums[mid] === target)
      return true;

    if (target < arr[mid])
      return this.binarySearch(nums, target, start, mid - 1);
      else
      return this.binarySearch(nums, target, mid+1, end);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;