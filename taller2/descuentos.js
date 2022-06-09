const price = 120;
const discount = 18;

const percentageWithoutDiscount = 100 - discount;
const priceWithDiscount = (price * percentageWithoutDiscount) / 100;

console.log({
  price,
  discount,
  percentageWithoutDiscount,
  priceWithDiscount,
});
