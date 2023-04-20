export function calculateTip(billAmount, tipPercentage) {
  const tipAmount = billAmount * (tipPercentage / 100);
  return tipAmount;
}
