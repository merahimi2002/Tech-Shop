import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { Col, Row, Container, Button } from "react-bootstrap";
import { UrlPicWithTwoFolderBack } from "../utilities/Url";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { FaRegTrashCan } from "react-icons/fa6";
import ProductsJson from "../data/Product.json";
import Table from "react-bootstrap/Table";

type CartItemPageProps = {
  id: number;
  quantity: number;
};

export function CartItemPage({ id, quantity }: CartItemPageProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = ProductsJson.result.find((i) => i.id === id);

  if (item == null) return null;
  // NullProductCheck
  
  if (item.image === null || item.image === "") {
    item.image = "Imgs/Shop-card/Noimage.png";
  }
  return (
    <tr>
      <td>
        <img src={item.image} />
      </td>
      <td>{item.name}</td>
      <td>{formatCurrency(item.price)}</td>
      <td>
        <div className="Quantity-action">
          <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
          <p>{quantity}</p>
          <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
        </div>
      </td>
      <td>{formatCurrency(item.price * quantity)}</td>
      <td>
        <Button className="Trash" onClick={() => removeFromCart(item.id)}>
          <FaRegTrashCan />
        </Button>
      </td>
    </tr>
  );
}

export function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <Fragment>
      <Banner Url={UrlPicWithTwoFolderBack("Imgs/Sliders/CartSlider.jpg")} Message="Cart" />
      <Container className="Cart-page">
        <Row xs={1}>
          <Col>
            <Table responsive hover striped bordered>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItemPage key={item.id} {...item} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
