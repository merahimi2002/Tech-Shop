import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Url, UrlATag, UrlPicWithTwoFolderBack } from "../utilities/Url";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCardContext";
import { CgShoppingCart } from "react-icons/cg";
import { GiEternalLove } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import ProductsJson from "../data/Product.json";
import "../assets/Css/Style.css";

export function Navbar() {
  const { openCart, openCartF, cartQuantity, cartFavoriteQuantity } =
    useShoppingCart();
  const RemoveDuplicateCategoryJson = [
    ...new Set(ProductsJson.result.map((i) => i.category)),
  ];
  return (
    <NavbarBs expand="lg" className="Navbar" sticky="top">
      <Container>
        <Row>
          <Col md={1} xs={3}>
            <div className="Logo">
              <img src={UrlPicWithTwoFolderBack("Imgs/Logoo.png")} alt="pic" />
            </div>
          </Col>
          <Col md={9} xs={5}>
            <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBs.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link to={Url("/")} as={NavLink}>
                  Home
                </Nav.Link>
                <Nav.Link to={Url("/AboutUs")} as={NavLink}>
                  About Us
                </Nav.Link>
                <Nav.Link to={Url("/Store")} as={NavLink}>
                  Store
                </Nav.Link>
                <NavDropdown title="Product">
                  {RemoveDuplicateCategoryJson.map((item) => (
                    <NavDropdown.Item key={item}>
                      <Nav.Link to={Url(item)} as={NavLink}>
                        {item}
                      </Nav.Link>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link to={Url("/Cart")} as={NavLink}>
                  Cart
                </Nav.Link>
              </Nav>
            </NavbarBs.Collapse>
          </Col>
          <Col md={2} xs={4}>
            <div className="nav-action">
              <Button onClick={openCart} className="Shop-cart-list">
                <CgShoppingCart />
                <div className="Number Shop-cart-list-number">
                  {cartQuantity}
                </div>
              </Button>
              <Button onClick={openCartF} className="Shop-cart-favorite">
                <GiEternalLove />
                <div className="Number Shop-cart-favorite-number">
                  {cartFavoriteQuantity}
                </div>
              </Button>
              <a href={UrlATag("Login")}>
                <Button className="Shop-cart-favorite">
                  <RiLoginBoxLine />
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </NavbarBs>
  );
}
