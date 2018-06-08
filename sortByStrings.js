function sortByStrings(s,t) {
  let sLetters = {};
  let returnString = '';
  for (let i = 0; i < s.length; i++) {
    if (sLetters[s[i]]) {
      sLetters[s[i]]++;
    } else {
      sLetters[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (sLetters[t[i]]) {
      for (let j = 0; j < sLetters[t[i]]; j++) {
        returnString += t[i];
      }
    }
  }
  return returnString;
}
