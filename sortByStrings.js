function sortByStrings(s,t) {
  let sLetters = {};
  let tLetters = {};
  let returnString = '';
  let remaining = '';
  for (let i = 0; i < t.length; i++) {
    if (tLetters[[i]]) {
      tLetters[t[i]]++;
    } else {
      tLetters[t[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (sLetters[s[i]]) {
      sLetters[s[i]]++;
    } else {
      sLetters[s[i]] = 1;
    }
  }
  for (let letter in sLetters) {
    if (!tLetters[letter]) {
      for (let i = 0; i < sLetters[letter]; i++) {
        remaining += letter;
      }
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (sLetters[t[i]]) {
      for (let j = 0; j < sLetters[t[i]]; j++) {
        returnString += t[i];
      }
    }
  }
  returnString += remaining;
  return returnString;
}