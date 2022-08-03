"use strict";

function calcTip(tip) {
  let result;
  if (tip > 300 || tip < 50) {
    result = (tip * 15) / 100;
  } else {
    result = (tip * 20) / 100;
  }
  return result;
}


const bills = [125,  555,  44];
const tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}



const total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(`les montants des notes sont ${bills} euros`);
console.log(`Les pourboires sont respectivement de ${tips} euros`);
console.log(`Les totaux sont respectivement de ${total} euros`); 
