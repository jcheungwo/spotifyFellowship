function changePossibilities(amount, denominations) {
  let possibilities = new Array(amount + 1).fill(0);
  possibilities[0] = 1;
  for (let value of denominations) {
    if (value === 0) {
      return Infinity;
    }
    for (let i = 1; i <= amount; i++){
      if (value <= i) {
        possibilities[i] += possibilities[i - value];
      }
    }
  }
  return possibilities[amount];
}