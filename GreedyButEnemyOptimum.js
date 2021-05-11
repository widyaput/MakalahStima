const Solution = (coins, i, j) => {
  if (i+1 === j) return Math.max(coins[i], coins[j]);
  const pick = Math.max(coins[i], coins[j]);
  if (coins.indexOf(pick) === i){
    return pick + Math.min(Solution(coins, i+2, j), Solution(coins, i+1, j-1));
  }else return pick + Math.min(Solution(coins, i+1, j-1), Solution(coins, i, j-2));
}

console.time("Greedy with Enemy using DP");
console.log(Solution([20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3], 0, 31));
console.timeEnd("Greedy with Enemy using DP");