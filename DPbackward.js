const Solution = (coins) => {
  const lookup = new Array(coins.length).fill(0).map(() => new Array(coins.length).fill(-1));
  return Solutions(coins, 0, coins.length-1, lookup);
}

const Solutions = (coins, i, j, lookup) => {
  if (i > j) return 0;
  if (i === j) return coins[i];
  if (i+1 === j) return Math.max(coins[i], coins[j]);
  // console.log(lookup);
  if (lookup[i][j] === -1){
    const start = coins[i] + Math.min(Solutions(coins, i+1, j-1, lookup), Solutions(coins, i+2, j, lookup));
    const end = coins[j] + Math.min(Solutions(coins, i, j-2, lookup), Solutions(coins, i+1, j-1, lookup));
    lookup[i][j] = Math.max(start, end);
  }
  return lookup[i][j];
}
console.time("DP Backward Approach");
console.log(Solution([20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3]));
console.timeEnd("DP Backward Approach");