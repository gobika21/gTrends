// import Home from "./Modules/Home/Home";
// import Product from "./Modules/Product/Product";
// import Footer from "./assets/Components/Footer/Footer";
import Footer from "./Footer/Footer";
import Headers from "./Headers/Headers";
import Home from "./Home/Home";
import Product from "./Products/Products";
// import { Routes, Route } from "react-router-dom";
// import Products from "./Modules/ProductSec/ProductSec";
// import CategoryProducts from "./Modules/CategoryProducts/CategoryProducts";
// import Cart from "../src/Cart/Cart";
// import About from "./assets/Components/About/About";
// import Checkout from "./assets/Components/Checkout/Checkout";

function App() {
  return (
    <>
      <Headers />
      <Home />
      <Product />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      {/* </Routes> */}
      <Footer />
    </>
  );
}

export default App;
