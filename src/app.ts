function isPalindrome(x: number): boolean {
  const numStr = x.toString()
  const reversedNumStr = numStr.split('').reverse().join('');
return numStr === reversedNumStr;
};

const num = 121;



