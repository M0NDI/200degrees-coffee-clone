import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Visit from "./components/Visit";
import OurStory from "./components/OurStory";
import Contact from "./components/Contact";
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
          <Route path="/pages/contact-us" element={<Contact/>}/>
          <Route path="/products/:name" element={<ProductPage productDetails={productDetails} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
