const CUREENCY_fORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CUREENCY_fORMATTER.format(number);
}
