let reverseString = function (str) {
  let spiltString = str.split("");
  let reverseString = spiltString.reverse("");
  let rejoinedString = reverseString.join("");

  return rejoinedString;
}


function isPalindrome(word) {
  let palindroneString = reverseString(word);

  if (palindroneString === word) {
    return true;
  } else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;