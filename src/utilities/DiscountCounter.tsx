export function DiscountCounter(Num: number, Percent: number) {
  Percent = Percent / 100;
  const result = Num * Percent;
  return Num - result;
}
