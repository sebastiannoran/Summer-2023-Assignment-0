class MySolution {
  countDownSum(num) {
    // let result = ((num*(num+1))/2)
    // return result;
    // use the same logic as above, but use recursion
    if(num === 1) {
      return 1;
    } else {
      return num + this.countDownSum(num-1);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;