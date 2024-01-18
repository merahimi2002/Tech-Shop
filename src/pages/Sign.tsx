import { Fragment } from "react";
import { UrlPicWithTwoFolderBack } from "../utilities/Url";
import { SignUp } from "../components/SignUp";
import { Banner } from "../components/Banner";

export function Sign() {
  return (
    <Fragment>
      <Banner
        Url={UrlPicWithTwoFolderBack("Imgs/Sliders/SignIn.jpg")}
        Message="Sign Up"
      />
      <SignUp />
    </Fragment>
  );
}
