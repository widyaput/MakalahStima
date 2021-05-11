const Solution = (coins) => {
  const stack = [];
  for (let i of coins){
    stack.push(i);
    let fail = false;
    while (stack.length >= 3 && !fail){
      let a = stack.pop();
      let b = stack.pop();
      let c = stack.pop();
      if (a < b && b > c){
        stack.push(a - b + c);
      }else{
        fail = true;
        stack.push(c);
        stack.push(b);
        stack.push(a);
      }
    }
  }
  stack.sort((a,b) => b - a);
  let selisih = 0;
  let sign = 1;
  for (let i of stack){
    selisih += i*sign;
    sign = -1*sign;
  }
  const total = coins.reduce((a,b) => a+b);
  return (total+selisih)/2;
}

console.time("Tomasz's Algorithm");
console.log(Solution([20, 30, 2, 3, 4, 10, 234, 345, 12, 24, 45, 34, 1, 3, 6, 87, 26, 45, 89, 89, 23, 52, 63, 87, 80, 43, 22, 12, 45, 12, 1, 3]));
console.timeEnd("Tomasz's Algorithm");