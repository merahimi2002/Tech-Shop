import { Offcanvas, Stack,Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartFavoriteItem } from "./ShoppingFavoriteCartItem"
import ShoppingProducts from "../data/item.json"

type ShoppingFavouriteCartProps = {
  isOpenF: boolean
}

export function ShoppingFavouriteCart({ isOpenF }: ShoppingFavouriteCartProps) {
  const { closeCartF, cartFavoriteItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpenF} onHide={closeCartF} placement="end" className="Shopping-cart">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Favorite Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cartFavoriteItems.map(item => (
            <CartFavoriteItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
