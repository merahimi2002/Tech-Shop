import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { TextSummarizer } from "../utilities/TextSummarizer";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Discount, SoldOut } from "../context/ProductContext";
import Modal from "react-bootstrap/Modal";

type ProductCardsProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isAvailable: boolean;
};

type ProductPageProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isAvailable: boolean;
  modals: string;
  category: string;
};

export function ProductCards({
  id,
  name,
  price,
  image,
  description,
  isAvailable,
}: ProductCardsProps) {
  // ShoppingCardContext
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,

    getItemFavoriteQuantity,
    AddCartFavoriteQuantity,
    removeFromFavoriteCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const FavoriteQuantity = getItemFavoriteQuantity(id);

  // modale
  const [lgShow, setLgShow] = useState(false);

  // NullProductCheck

  if (image === null || image === "") {
    image = "../../Imgs/Shop-card/Noimage.png";
  }

  //ClassName
  let ClassName = name;

  // Discount
  const discountPercent = 50;
  const discount = Discount(-1, discountPercent);
  if (ClassName === discount) {
    ClassName = "Discount";
  }

  // Unavailable or SoldOut
  let soldoutID = -1;
  if (isAvailable === false) {
    soldoutID = id;
  }
  const soldout = SoldOut(soldoutID);
  if (ClassName === soldout) {
    ClassName = "Sold-Out";
    if (quantity > 0) {
      removeFromCart(soldoutID);
    }
    if (FavoriteQuantity > 0) {
      removeFromFavoriteCart(soldoutID);
    }
  }

  //Function

  return (
    <div className={ClassName}>
      <Card className="Product-Cards">
        <Card.Img variant="top" src={image}></Card.Img>
        <Card.Body>
          <Card.Title>
            <span className="name">
              <Button onClick={() => setLgShow(true)} className="No-button">
                {name}
              </Button>
            </span>
            <span className="description text-muted">
              {TextSummarizer(description, 40)}
            </span>
            <span className="price "> {formatCurrency(price)}</span>
          </Card.Title>
          <div className="Product-Cards-button">
            <div className="Product-Cards-button-love">
              {FavoriteQuantity === 0 ? (
                <Button onClick={() => AddCartFavoriteQuantity(id)}>
                  <FaRegHeart />
                </Button>
              ) : (
                <Button onClick={() => removeFromFavoriteCart(id)}>
                  <FaHeart />
                </Button>
              )}
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
                <Col md={6} sm={12}>
                  <img className="mb-3" src={image} alt="pic" />
                  <div className="image-box">
                    <img src={image} alt="pic" />
                    <img src={image} alt="pic" />
                    <img src={image} alt="pic" />
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <h5>Description</h5>
                  <p className="description">{description}</p>
                  <p className="price">{formatCurrency(price)}</p>
                  <div className="Product-Cards-button">
                    <div className="Product-Cards-button-love">
                      {FavoriteQuantity === 0 ? (
                        <Button onClick={() => AddCartFavoriteQuantity(id)}>
                          <FaRegHeart />
                        </Button>
                      ) : (
                        <Button onClick={() => removeFromFavoriteCart(id)}>
                          <FaHeart />
                        </Button>
                      )}
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
                  <a className="Payment" href={name} target="_blank">
                    <Button>Details</Button>
                  </a>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Card>
    </div>
  );
}

export function ProductPage({
  id,
  name,
  price,
  image,
  description,
  isAvailable,
  modals,
  category,
}: ProductPageProps) {
  // ShoppingCardContext
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,

    getItemFavoriteQuantity,
    AddCartFavoriteQuantity,
    removeFromFavoriteCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const FavoriteQuantity = getItemFavoriteQuantity(id);

  // NullProductCheck

  if (image === null || image === "") {
    image = "../../Imgs/Shop-card/Noimage.png";
  }

  //ClassName
  let ClassName = name;

  // Discount
  const discountPercent = 50;
  const discount = Discount(-1, discountPercent);
  if (ClassName === discount) {
    ClassName = "Discount";
  }

  // Unavailable or SoldOut
  let soldoutID = -1;
  if (isAvailable === false) {
    soldoutID = id;
  }
  const soldout = SoldOut(soldoutID);
  if (ClassName === soldout) {
    ClassName = "Sold-Out";
    if (quantity > 0) {
      removeFromCart(soldoutID);
    }
    if (FavoriteQuantity > 0) {
      removeFromFavoriteCart(soldoutID);
    }
  }

  //Function

  return (
    <div className={ClassName}>
      <div className="Product-Page">
        <Container>
          <Row>
            <Col md={5} sm={12}>
              <div className="Product-Page-img">
                <img src={image} alt="pic" />
                <div className="image-box">
                  <img src={image} alt="pic" />
                  <img src={image} alt="pic" />
                  <img src={image} alt="pic" />
                </div>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <div className="Product-Page-box">
                <p>
                  {modals} / {category}
                </p>
                <div className="Titr-bar text-left">
                  <h2>{name}</h2>
                  <div className="bar-main">
                    <div className="bar bar-big"></div>
                  </div>
                </div>
                <p>{description}</p>
                <h5 className="price">{formatCurrency(price)}</h5>
                <div className="Product-Cards-button">
                  <div className="Product-Cards-button-love">
                    {FavoriteQuantity === 0 ? (
                      <Button onClick={() => AddCartFavoriteQuantity(id)}>
                        <FaRegHeart />
                      </Button>
                    ) : (
                      <Button onClick={() => removeFromFavoriteCart(id)}>
                        <FaHeart />
                      </Button>
                    )}
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
                <a className="cart" href="/cart">
                  <Button>Shop Cart</Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
