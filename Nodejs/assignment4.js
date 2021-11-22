const calculateDiscount = (purchaseAmt) => {
    if (purchaseAmt < 2500)
      console.log(`
  Total Amount: ${purchaseAmt}
  Discount : No Discount
  Final Amount: ${purchaseAmt}
  `);
    else if (purchaseAmt>=2500 && purchaseAmt<= 5000)
      console.log(`
  Total Amount: ${purchaseAmt}
  Discount: 10% Discount
  Final Amount: ${0.9 * purchaseAmt}
  `);
    else
      console.log(`
  Total Amount: ${purchaseAmt}
  Discount: 20% Discount
  Final Amount: ${0.8 * purchaseAmt}
  `);
  };
  
  const calculateGST = (purchaseAmt) =>
    console.log(`
  Total Amount: ${purchaseAmt}
  GST: 18%
  Final Amount: ${1.18 * purchaseAmt}
  `);
  
  module.exports = { calculateDiscount, calculateGST };