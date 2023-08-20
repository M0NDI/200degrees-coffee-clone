import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import productDetails from "./productDetails";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home productDetails={productDetails} />} />
          <Route path="/collections/retail" element={<Shop productDetails={productDetails} />} />
          <Route path="/products/:name" element={<ProductPage productDetails={productDetails} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
