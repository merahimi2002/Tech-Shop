import { Offcanvas, Container, Row, Col, Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingProducts from "../data/item.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

type ShoppingCartProps = {
  isOpen: boolean;
};

type FavoriteItemProps = {
  id: number;
  quantityFavorite: number;
};

type ShoppingFavouriteCartProps = {
  isOpenF: boolean
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Container className="Shopping-cart-item">
      <Row>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <div className="Shopping-cart-item-img">
              <img src={item.image} />
            </div>
            <div className="Shopping-cart-item-name me-auto">
              <p>
                {item.name} {quantity > 1 && <span> x{quantity}</span>}
              </p>
              <div className="Shopping-cart-item-price">
                {/* <p>{formatCurrency(item.price)}</p> */}
                <p>{formatCurrency(item.price * quantity)}</p>
              </div>
            </div>
            <Button
              variant="outline-danger"
              onClick={() => removeFromCart(item.id)}
            >
              {" "}
              &times;
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      className="Shopping-cart"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="Shopping-cart-total">
            <p>
              Total :{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = ShoppingProducts.find(
                    (i) => i.id === cartItem.id
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
          <Button className="Payment">Payment</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

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
