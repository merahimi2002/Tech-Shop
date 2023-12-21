import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { ProductCardsList } from "../components/ProductCardsList";

export function Store() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message="Store" />
      <ProductCardsList />
    </Fragment>
  );
}
