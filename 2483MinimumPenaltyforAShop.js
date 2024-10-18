// 2483MinimumPenaltyforAShop.js
function bestClosingTime(customers: string): number {
  let penalty = 0,
      min = 0,
      minIndex = 0

  for (let i = 0; i < customers.length; i++) {
      // Only the relative penalty matters.
      // If its N then the relative penalty compared to the left went up
      // If its Y then the relative penalty compared to the left didnt just
      //   stay the same, but actually went down because you would've gained by
      //   staying open.
      penalty += customers[i] === 'Y' ? -1 : 1;
      if (penalty < min) {
          const nextIndex = i + 1;
          min = penalty;
          answer = nextIndex
      }
  }

  return answer;
};