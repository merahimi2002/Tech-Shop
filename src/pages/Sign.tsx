import { Fragment } from "react";
import { SignUp } from "../components/SignUp";
import { Banner } from "../components/Banner";


export function Sign() {
  return (
    <Fragment>
      <Banner Url="../../Imgs/Sliders/SignIn.jpg" Message="Sign Up" />
      <SignUp />
    </Fragment>
  );
}
