import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Visit from "./Pages/Visit";
import OurStory from "./Pages/OurStory";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import productDetails from "./productDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home productDetails={productDetails} />} />
          <Route path="/collections/retail" element={<Shop productDetails={productDetails} />} />
          <Route path="/pages/visit-us" element={<Visit />} />
          <Route path="/pages/about-us" element={<OurStory />} />
          <Route path="/pages/contact-us" element={<Contact />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/products/:name" element={<ProductPage productDetails={productDetails} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
