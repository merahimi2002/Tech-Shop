import { DiscountCounter } from "../utilities/DiscountCounter";
import ShoppingProducts from "../data/item.json";

export function SoldOut(id: number) {
  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;
  return item.name;
}

export function Discount(id: number) {
  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;

  item.price = DiscountCounter(item.price, 50);
  return item.name;
}
