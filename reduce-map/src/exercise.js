export function calcTotal(orders) {
let total = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].delivered) {
      total += orders[i].total;
    }
  }
  return total;
}
