// 2483MinimumPenaltyforAShop.js
function bestClosingTime(db) {
  const n = db.length;
  const nCountAtIndex = new Array(n + 1).fill(0);
  const yCountAtIndex = new Array(n + 1).fill(0);
  const els = db.split(""); // Split into individual characters

  // Build prefix sums for 'N's
  for (let i = 0; i < n; i++) {
      nCountAtIndex[i + 1] = nCountAtIndex[i] + (els[i] === "N" ? 1 : 0);
  }

  // Build suffix sums for 'Y's
  for (let i = n - 1; i >= 0; i--) {
      yCountAtIndex[i] = yCountAtIndex[i + 1] + (els[i] === "Y" ? 1 : 0);
  }

  // Now, for each possible closing time from 0 to n, compute the loss
  let min = Infinity,
      minIndex = -1;
  for (let i = 0; i <= n; i++) {
      const loss = nCountAtIndex[i] + yCountAtIndex[i];
      if (loss < min) {
          min = loss;
          minIndex = i;
      }
  }
  return minIndex;
}