import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import { UrlPicWithTwoFolderBack } from "../utilities/Url";
import { AboutUsWhitoutBanner } from "./AboutUs";
import { ProductCarousel } from "../components/ProductCardsList";
import Carousel from "react-bootstrap/Carousel";


export function Home() {
  return (
    <Fragment>
      <Container fluid className="Slider p-0">
        <Carousel fade>
          <Carousel.Item>
            <img src={UrlPicWithTwoFolderBack("Imgs/Sliders/HomePageSlider01.jpeg")} alt="pic" />
            <Carousel.Caption>
              <h1>
                <strong>Tech</strong> Shop
              </h1>
              <h5>Level Up With Tech Shop</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={UrlPicWithTwoFolderBack("Imgs/Sliders/HomePageSlider02.jpeg")} alt="pic" />
            <Carousel.Caption>
              <h1>Tech Shop</h1>
              <h5>have great time with tech shop</h5>
              <h5> reliable , organized & satisfaction</h5>
              <h5>all at once</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <AboutUsWhitoutBanner />
      <Container className="Product-newest">
        <Row>
          <div className="Titr-bar">
            <h2>Newest Product </h2>
            <div className="bar-main">
              <div className="bar bar-big"></div>
            </div>
          </div>
        </Row>
        <Row>
          <ProductCarousel />
        </Row>
      </Container>
      {/* <API /> */}
    </Fragment>
  );
}
