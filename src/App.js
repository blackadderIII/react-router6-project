import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

//Pages

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartisEmpty] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1> The Fortress Of Solitude</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about/*" element={<About />} />

          <Route path="/products/:id/*" element={<ProductDetails />} />

          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div className="content">
                <h1>This is a test.</h1>
              </div>
            }
          />
          <Route
            path="/redirect"
            element={
              cartisEmpty ? (
                <Navigate to={"/products"} />
              ) : (
                <h1>Failure useState is currently false</h1>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
