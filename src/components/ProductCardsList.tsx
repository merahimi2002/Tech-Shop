import { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCards } from "./ProductCards";
import { Banner } from "../components/Banner";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import ProductsJson from "../data/Product.json";
import Carousel from "react-multi-carousel";
import ReactPaginate from "react-paginate";
import "react-multi-carousel/lib/styles.css";

type ProductCategoryProps = {
  category: string;
};

export function ProductCarousel() {
  const ProductCarouselJson = ProductsJson.result.slice(-5);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 1000 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    LargMobile: {
      breakpoint: { max: 1000, min: 750 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
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
          {ProductCarouselJson.map((item) => (
            <Col key={item.id}>
              <ProductCards {...item} />
            </Col>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export function ProductPaging() {
  const users = ProductsJson.result;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <Col key={item.id}>
          <ProductCards {...item} />
        </Col>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="Paging">
      <Container>
        <Row xl={4} lg={3} md={2} xs={1} className="g-3 justify-content-center">
          {displayUsers}
        </Row>
      </Container>
      <ReactPaginate
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-nav"}
        disabledClassName={"Disabled"}
      />
    </div>
  );
}

export function ProductCategory({ category }: ProductCategoryProps) {
  const CategoryFilter = ProductsJson.result.filter((item) => {
    return item.category === category;
  });
  const users = CategoryFilter;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <Col key={item.id}>
          <ProductCards {...item} />
        </Col>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message={category} />
      <div className="Paging">
        <Container>
          <Row
            xl={4}
            lg={3}
            md={2}
            xs={1}
            className="g-3 justify-content-center"
          >
            {displayUsers}
          </Row>
        </Container>
        <ReactPaginate
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-nav"}
          disabledClassName={"Disabled"}
        />
      </div>
    </Fragment>
  );
}
