const calculate = (array, i, j) => {
  return i <= j ? array[i][j] : 0;
}
const Solution = (coins) => {
  const n = coins.length;
  if (n === 1 ) return coins[0];
  if (n === 2) return Math.max(coins[0], coins[1]);
  const T = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let x = 0; x < n; x++){
    let i = 0;
    let j = x;
    while (j < n) {
      let start = coins[i] + Math.min(calculate(T, i+2, j), calculate(T, i+1, j-1));
      let end = coins[j] + Math.min(calculate(T, i+1, j-1), calculate(T, i, j-2));
      T[i][j] = Math.max(start,end);
      i++;
      j++;
    }
  }
  return T[0][n-1];
}
console.time("DP Forward Approach");
console.log(Solution([20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3]));
console.timeEnd("DP Forward Approach");