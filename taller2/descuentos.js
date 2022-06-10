// const price = 120;
// const discount = 18;

const calculatePriceWithDiscount = (price, discount) => {
  const percentageWithoutDiscount = 100 - discount;
  const priceWithDiscount = (price * percentageWithoutDiscount) / 100;

  return priceWithDiscount;
};

// console.log({
//   price,
//   discount,
//   percentageWithoutDiscount,
//   priceWithDiscount,
// });

function onClickPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const discountPrice = calculatePriceWithDiscount(priceValue, discountValue);

  const htmlText = document.getElementById("resultPrice");
  htmlText.innerText = "El precio total es $" + discountPrice;
}

// manejo de arrays para implementar una función
const coupons1 = ["estrella", "diamante", "especial"];

const coupons2 = [
  {
    name: "estrella",
    discount: 15,
  },
  {
    name: "diamante",
    discount: 30,
  },
  {
    name: "especial",
    discount: 25,
  },
];

function onClickPriceDiscountCoupon1() {
  const inputPrice = document.getElementById("inputPriceCoupon1");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon1");
  const couponValue = inputCoupon.value;

  let discount;

  switch (couponValue) {
    case coupons1[0]: // "estrella"
      discount = 15;
      break;
    case coupons1[1]: // "diamante"
      discount = 30;
      break;
    case coupons1[2]: // "especial"
      discount = 25;
      break;
  }

  const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

  const htmlText = document.getElementById("resultPriceCoupon1");
  htmlText.innerText = "El precio con descuento son: $" + priceWithDiscount;
}

function onClickPriceDiscountCoupon2() {
  const inputPrice = document.getElementById("inputPriceCoupon2");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon2");
  const couponValue = inputCoupon.value;

  let discount;

  if (!coupons1.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
  } else if (couponValue === "estrella") {
    discount = 15;
  } else if (couponValue === "diamante") {
    discount = 30;
  } else if (couponValue === "especial") {
    discount = 25;
  }

  const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

  const htmlText = document.getElementById("resultPriceCoupon2");
  htmlText.innerText = "El precio con descuento son: $" + priceWithDiscount;
}

function onClickPriceDiscountCoupon3() {
  const inputPrice = document.getElementById("inputPriceCoupon3");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon3");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = (coupon) => {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons2.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
  } else {
    const discount = userCoupon.discount;
    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

    const htmlText = document.getElementById("resultPriceCoupon3");
    htmlText.innerText = "El precio con descuento son: $" + priceWithDiscount;
  }
}
