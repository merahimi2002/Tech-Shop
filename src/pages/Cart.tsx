import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { Col, Row, Container } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { CartItem } from "../components/ShoppingCartItem";

export function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/CartSlider.jpg" Message="Cart" />
      <Container>
        <Row lg={3} md={3} xs={2}>
          {cartItems.map((item) => (
            <Col key={item.id}>
              <CartItem  {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}
