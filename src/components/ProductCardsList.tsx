import { Container, Row, Col } from "react-bootstrap";
import { ProductCards } from "../components/ProductCards";
import ShoppingProducts from "../data/item.json";


export function ProductCardsList () {
  return (
    <Container>
        <Row lg={4} md={3} xs={2} className="g-3">
          {ShoppingProducts.map((item) => (
            <Col key={item.id}>
              <ProductCards {...item} />
            </Col>
          ))}
        </Row>
      </Container>
  )
}

