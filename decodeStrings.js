function decodeStrings(s) {
  let returnString = '';
  let number, openBraces, innerString, decodedString;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      number = s[i] * 1;
      for (i += 1; s[i] >= '0' && s[i] <= '9'; i++) {
        number = (number * 10) + s[i] * 1;
      }
      for (i += 1, openBraces = 1, innerString = ''; openBraces > 0; i++) {
        if (s[i] === '[') {
          openBraces++;
        } else if (s[i] === ']') {
          openBraces--;
        }
        if (openBraces !== 0) {
          innerString += s[i];
        }
      }
      i--;
      decodedString = decodeStrings(innerString);
      for (let j = 0; j < number; j++) {
        returnString += decodedString;
      }
    } else {
      returnString += s[i];
    }
  }
  return returnString;
}
