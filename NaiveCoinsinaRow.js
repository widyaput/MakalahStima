const Solution = (coins) => {
  return Solutions(coins, 0, coins.length-1);
}

const Solutions = (coins, i, j) => {
  if (i === j) return coins[i];
  if (i + 1 === j) return Math.max(coins[i], coins[j]);
  return Math.max(coins[i] + Math.min(Solutions(coins, i+1, j-1), Solutions(coins, i+2, j)), coins[j] + Math.min(Solutions(coins, i, j-2), Solutions(coins, i+1, j-1)));
}
const coins = [20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3];
console.time(`Naive Recursive Approach  with ${coins.length} coins`);
console.log(Solution(coins));
console.timeEnd(`Naive Recursive Approach  with ${coins.length} coins`);