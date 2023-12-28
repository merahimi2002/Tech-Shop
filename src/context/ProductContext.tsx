import { DiscountCounter } from "../utilities/DiscountCounter";
import ProductsJson from "../data/Product.json";

export function SoldOut(id: number) {
  const item = ProductsJson.result.find((i) => i.id === id);
  if (item == null) return null;
  return item.name;
}

export function Discount(id: number, Percent: number) {
  const item = ProductsJson.result.find((i) => i.id === id);
  if (item == null) return null;

  item.price = DiscountCounter(item.price, Percent);
  console.log(item.price)
  return item.name;
}
