import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { ProductCards } from "../components/ProductCards";
import { Col, Container, Row } from "react-bootstrap";
import ProductsJson from "../data/Product.json";

type CategoryProductProps = {
  category: string;
};

export function CategoryProduct({ category }: CategoryProductProps) {
  const CategoryFilter = ProductsJson.result.filter((item) => {
    return item.category === category;
  });
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message={category} />
      <Container>
        <Row xl={4} lg={3} md={2} xs={1} className="g-3 justify-content-center">
          {CategoryFilter.map((item) => (
            <Col key={item.id}>
              <ProductCards {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}
