import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Banner } from "../components/Banner";

export function AboutUs() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/AboutUs.jpg" Message="About Us" />
      <Container className="About-us">
        <Row>
          <Col md={5} xs={12}>
            <div className="border-image">
              <img src="../../Imgs/About-us.png" alt="pic" />
            </div>
          </Col>
          <Col md={1} xs={12}></Col>
          <Col md={6} xs={12}>
            <div className="About-us-box">
              <h2>
                About <strong>Tech Shop</strong>
              </h2>
              <p className="text-muted my-4">
                At Tech Shop, we're more than just a computer equipment store
                we're your technology partners. Founded with a passion for
                innovation and a commitment to delivering top-notch products and
                services
              </p>
              <p className="text-muted my-4">
                Our mission is to provide cutting-edge technology solutions
                tailored to meet your needs. Whether you're a casual user, a
                professional, or a business seeking reliable tech support, we're
                here to offer expertise and a wide range of products that
                elevate your experience.
              </p>
              <ul>
                <li>
                  <FaCheckCircle />
                  Expert Guidance
                </li>
                <li>
                  <FaCheckCircle />
                  Quality Products
                </li>
                <li>
                  <FaCheckCircle />
                  Exceptional Service
                </li>
                <li>
                  <FaCheckCircle />
                  Community Engagement
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export function AboutUsWhitoutBanner() {
  return (
    <Fragment>
      <Container className="About-us">
        <Row>
          <Col md={5} xs={12}>
            <div className="border-image">
              <img src="../../Imgs/About-us.png" alt="pic" />
            </div>
          </Col>
          <Col md={1} xs={12}></Col>
          <Col md={6} xs={12}>
            <div className="About-us-box">
              <h2>
                About <strong>Tech Shop</strong>
              </h2>
              <p className="text-muted my-4">
                At Tech Shop, we're more than just a computer equipment store
                we're your technology partners. Founded with a passion for
                innovation and a commitment to delivering top-notch products and
                services
              </p>
              <p className="text-muted my-4">
                Our mission is to provide cutting-edge technology solutions
                tailored to meet your needs. Whether you're a casual user, a
                professional, or a business seeking reliable tech support, we're
                here to offer expertise and a wide range of products that
                elevate your experience.
              </p>
              <ul>
                <li>
                  <FaCheckCircle />
                  Expert Guidance
                </li>
                <li>
                  <FaCheckCircle />
                  Quality Products
                </li>
                <li>
                  <FaCheckCircle />
                  Exceptional Service
                </li>
                <li>
                  <FaCheckCircle />
                  Community Engagement
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
