import { Container, Row, Col } from "react-bootstrap";
import { ProductCards } from "./ProductCards";
import ShoppingProducts from "../data/item.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function ProductCardsList() {
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
  );
}

export function ProductCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Container className="Product-carousel">
      <Row>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={false}
          swipeable={true}
          draggable={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {ShoppingProducts.map((item) => (
            <Col key={item.id}>
              <ProductCards {...item} />
            </Col>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export function SoldOut(id: number) {

  const item = ShoppingProducts.find((i) => i.id === id);
  if (item == null) return null;

  item.name = "Sold Out";
  item.price = 0;

}

{
  SoldOut(4);
}
