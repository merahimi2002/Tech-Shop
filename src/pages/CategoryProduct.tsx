import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { ProductPaging } from "../components/ProductCardsList";

export function CategoryProduct() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message="Product" />
      <ProductPaging />
    </Fragment>
  );
}
