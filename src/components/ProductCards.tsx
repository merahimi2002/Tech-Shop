import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { TextSummarizer } from "../utilities/TextSummarizer";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "react-bootstrap/Modal";

type ProductCardsProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  summery: string;
};

export function ProductCards({
  id,
  name,
  price,
  image,
  summery,
}: ProductCardsProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const [lgShow, setLgShow] = useState(false);

  return (
    <Card className="Product-Cards">
      <Card.Img variant="top" src={image}></Card.Img>
      <Card.Body>
        <Card.Title>
          <span className="name">
            <Button onClick={() => setLgShow(true)} className="No-button">
              {name}
            </Button>
          </span>
          <span className="summery text-muted">
            {TextSummarizer(summery, 40)}
          </span>
          <span className="price "> {formatCurrency(price)}</span>
        </Card.Title>
        <div className="Product-Cards-button">
          <div className="Product-Cards-button-love">
            <Button>
              <FaRegHeart />
            </Button>
          </div>
          <div className="Product-Cards-button-cart">
            {quantity === 0 ? (
              <Button
                className="Add-to-cart"
                onClick={() => increaseCartQuantity(id)}
              >
                {" "}
                <CgShoppingCart />
              </Button>
            ) : (
              <div className="Product-Cards-button-action">
                <div className="Product-Cards-button-control">
                  <div className="Product-Cards-button-remove">
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  </div>
                  <div className="Product-Cards-button-counter">
                    <span>{quantity}</span>
                  </div>
                  <div className="Product-Cards-button-add ma-auto">
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="Product-Cards-button-info">
            <Button onClick={() => setLgShow(true)}>
              <FaSearchPlus />
            </Button>
          </div>
        </div>
      </Card.Body>
      <Modal
        className="Product-details"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img className="mb-3" src={image} alt="pic" />
                <div className="image-box">
                  <img src={image} alt="pic" />
                  <img src={image} alt="pic" />
                  <img src={image} alt="pic" />
                </div>
              </Col>
              <Col>
                <h5>Description</h5>
                <p className="summery">{summery}</p>
                <p className="price">{formatCurrency(price)}</p>
                <div className="Product-Cards-button">
                  <div className="Product-Cards-button-love">
                    <Button>
                      <FaRegHeart />
                    </Button>
                  </div>
                  <div className="Product-Cards-button-cart">
                    {quantity === 0 ? (
                      <Button
                        className="Add-to-cart"
                        onClick={() => increaseCartQuantity(id)}
                      >
                        {" "}
                        <CgShoppingCart />
                      </Button>
                    ) : (
                      <div className="Product-Cards-button-action">
                        <div className="Product-Cards-button-control">
                          <div className="Product-Cards-button-remove">
                            <Button onClick={() => decreaseCartQuantity(id)}>
                              -
                            </Button>
                          </div>
                          <div className="Product-Cards-button-counter">
                            <span>{quantity}</span>
                          </div>
                          <div className="Product-Cards-button-add ma-auto">
                            <Button onClick={() => increaseCartQuantity(id)}>
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="Product-Cards-button-remove-all">
                          <Button
                            onClick={() => removeFromCart(id)}
                            variant="danger"
                          >
                            <FaRegTrashCan />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <a className="Payment" href="/Cart">
                  <Button>Payment</Button>
                </a>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Card>
  );
}
