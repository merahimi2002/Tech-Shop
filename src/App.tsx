import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import { Url } from "./utilities/Url";
import { ShoppingCartProvider } from "./context/ShoppingCardContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { AboutUs } from "./pages/AboutUs";
import { Cart } from "./pages/Cart";
import { Sign } from "./pages/Sign";
import { Login } from "./pages/Login";
import { ProductCategory } from "./components/ProductCardsList";
import { Page404 } from "./pages/404";
import { ProductPage } from "./components/ProductCards";
import ProductsJson from "./data/Product.json";


function App() {
  return (
    <Fragment>
      <ShoppingCartProvider>
        <Navbar />
        <Container fluid className="p-0">
          <Routes>
            <Route path={Url("")} element={<Home />}></Route>
            <Route path={Url("Store")} element={<Store />}></Route>
            <Route path={Url("AboutUs")} element={<AboutUs />}></Route>
            <Route path={Url("Cart")} element={<Cart />}></Route>
            <Route path={Url("Sign")} element={<Sign />}></Route>
            <Route path={Url("Login")} element={<Login />}></Route>
            <Route path={Url("404")} element={<Page404 />}></Route>
            {ProductsJson.result.map((item) => (
              <Route
                key={item.id}
                path={Url(item.slug)}
                element={<ProductPage {...item} />}
              ></Route>
            ))}
            {ProductsJson.result.map((item) => (
              <Route
                key={item.category}
                path={Url(item.category)}
                element={<ProductCategory {...item} />}
              ></Route>
            ))}
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </Fragment>
  );
}

export default App;
