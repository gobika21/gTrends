// import Home from "./Modules/Home/Home";
// import Product from "./Modules/Product/Product";
// import Footer from "./assets/Components/Footer/Footer";
import Footer from "./pages/Footer/Footer";
import Headers from "./pages/Headers/Headers";
import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
import { Routes, Route } from "react-router-dom";
// import AppRouter from "./routes/routes";
import About from "./pages/About/About";
import ProductList from "./pages/ProductList/ProductList";
import ViewCart from "./pages/ViewCart/ViewCart";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/cart" element={<ViewCart />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
