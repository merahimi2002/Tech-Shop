import { DiscountCounter } from "../utilities/DiscountCounter";
import ShoppingProducts from "../data/item.json";

export function SoldOut(id: number) {
  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;

  item.name = "Sold-Out";
  item.id = -1;
}

export function Discount(id: number) {
  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;
  const Name = item.name;

  item.name = "Discount " + Name;
  item.price = DiscountCounter(item.price, 50);
}
