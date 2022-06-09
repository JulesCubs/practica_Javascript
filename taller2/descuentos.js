const price = 120;
const discount = 18;

const calculatePriceWithDiscount = (price, discount) => {
  const percentageWithoutDiscount = 100 - discount;
  const priceWithDiscount = (price * percentageWithoutDiscount) / 100;

  return priceWithDiscount;
};

console.log({
  price,
  discount,
  percentageWithoutDiscount,
  priceWithDiscount,
});
