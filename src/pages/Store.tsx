import { Fragment } from "react";
import { ProductCardsList } from "../components/ProductCardsList";
import { Banner } from "../components/Banner";


export function Store() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/StoreSlider.jpg" Message="Store" />
      <ProductCardsList />
    </Fragment>
  );
}
