function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  const productsSum = Object.values(products);
  for (const value of productsSum) {
    sum += value;
    return sum;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
