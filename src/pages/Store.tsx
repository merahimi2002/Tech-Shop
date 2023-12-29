import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { ProductPaging } from "../components/ProductCardsList";

export function Store() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message="Store" />
      <ProductPaging />
    </Fragment>
  );
}
