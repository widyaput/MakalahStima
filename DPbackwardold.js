const Solution = (coins, i, j, lookup) => {
  if (i > j) return 0;
  if (i === j) return coins[i];
  if (i+1 === j) return Math.max(coins[i], coins[j]);
  if (lookup[i][j] === -1){
    const start = coins[i] + Math.min(Solution(coins, i+1, j-1, lookup), Solution(coins, i+2, j, lookup));
    const end = coins[j] + Math.min(Solution(coins, i, j-2, lookup), Solution(coins, i+1, j-1, lookup));
    lookup[i][j] = Math.max(start, end);
  }
  return lookup[i][j];
}

console.log(Solution([4, 6, 2, 3], 0, 3, new Array(4).fill(new Array(4).fill(-1))));