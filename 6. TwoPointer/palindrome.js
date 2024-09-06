let str = "A man, a plan, a canal: Panama";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.trim() === "") return true;
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s[i++] !== s[j--]) return false;
  }
  return true;
};

isPalindrome(str);
