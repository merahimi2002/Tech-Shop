import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import { ShoppingCartProvider } from "./context/ShoppingCardContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { AboutUs } from "./pages/AboutUs";
import { Cart } from "./pages/Cart";
import { Sign } from "./pages/Sign";
import { Login } from "./pages/Login";
import { CategoryProduct } from "./pages/CategoryProduct";

import { ProductPage } from "./components/ProductCards";
import ProductsJson from "./data/Product.json";

function App() {
  const RemoveDuplicateCategoryJson = [
    ...new Set(ProductsJson.result.map((i) => i.category)),
  ];
  return (
    <Fragment>
      <ShoppingCartProvider>
        <Navbar />
        <Container fluid className="p-0">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Store" element={<Store />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Sign" element={<Sign />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            {ProductsJson.result.map((item) => (
              <Route
                key={item.id}
                path={item.slug}
                element={<ProductPage {...item} />}
              ></Route>
            ))}
            {RemoveDuplicateCategoryJson.map((item) => (
              <Route
                key={item}
                path={item}
                element={<CategoryProduct />}
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
