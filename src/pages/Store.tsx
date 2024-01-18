import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { UrlPicWithTwoFolderBack } from "../utilities/Url";
import { ProductPaging } from "../components/ProductCardsList";

export function Store() {
  return (
    <Fragment>
      <Banner
        Url={UrlPicWithTwoFolderBack("Imgs/Sliders/StoreSlider.jpg")}
        Message="Store"
      />
      <ProductPaging />
    </Fragment>
  );
}
