const Solution = (coins) => {
  if (coins.length === 0) return 0;
  const pick = Math.max(coins[0], coins[coins.length-1]);
  coins.splice(coins.indexOf(pick), 1);
  const opponentpick = Math.max(coins[0], coins[coins.length-1]);
  coins.splice(coins.indexOf(opponentpick), 1);
  return pick + Solution(coins);
}
console.time("Greedy with enemy using greedy too");
console.log(Solution([20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3]));
console.timeEnd("Greedy with enemy using greedy too");