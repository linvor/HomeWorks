const makeDiscount = (percent) => {
  const sum = (price) => price - price / 100 * percent;
  return sum;
}

console.log(makeDiscount(10)(100));
console.log(makeDiscount(90)(100));

