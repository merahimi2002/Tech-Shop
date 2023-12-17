import { Offcanvas, Stack,Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./ShoppingCartItem"
import ShoppingProducts from "../data/item.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" className="Shopping-cart">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="Shopping-cart-total">
            <p>Total : {" "}{formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = ShoppingProducts.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}</p>
          </div>
          <Button className="Payment">Payment</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
