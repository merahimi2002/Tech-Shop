import { Container, Row, Col, Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"
import { formatCurrency } from "../utilities/formatCurrency"
import ShoppingProducts from "../data/item.json"

type FavoriteItemProps = {
  id: number;
  quantityFavorite: number;
};

export function CartFavoriteItem({ id, quantityFavorite }: FavoriteItemProps) {
  const { removeFromFavoriteCart } = useShoppingCart()
  const item = ShoppingProducts.find(i => i.id === id)
  if (item == null) return null

  return (
    <Container className="Shopping-cart-item">
      <Row>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <div className="Shopping-cart-item-img">
              <img src={item.image} />
            </div>
            <div className="Shopping-cart-item-name me-auto">
              <p>{item.name} </p>
              <div className="Shopping-cart-item-price">
                <p>{formatCurrency(item.price * quantityFavorite)}</p>
              </div>
            </div>
            <Button variant="outline-danger" onClick={() => removeFromFavoriteCart(item.id)}> &times;</Button>
          </Stack>
        </Col>
      </Row>
    </Container>

  )
}
