import "./App.css";
import SpamTextHolder from "./components/SpamTextHolder";
import Home from "./components/Home";

function App() {
  const productDetails = [
    {
      name: "ROASTER'S CHOICE SUBSCRIPTION",
      imagePath: "/assets/images/photos/products/home-page/product1.webp",
      hoverImage: "/assets/images/photos/products/home-page/product1-hover.webp",
      price: 19.00,    },
    {
      name: "FELIX ESPRESSO",
      imagePath: "/assets/images/photos/products/home-page/product2.webp",
      price: 22.00,
    },
    {
      name: "COLOMBIA NARINO - MERY ARMERO",
      imagePath: "/assets/images/photos/products/home-page/product3.webp",
      price: 24.00,
    },
    {
      name: "ETHIOPIA WASHED YIRGACHEFFE WORKA SAKARO",
      imagePath: "/assets/images/photos/products/home-page/product4.webp",
      price: 24.00,
    },
    {
      name: "ETHIOPIA NATURAL SHANTAWENE",
      imagePath: "/assets/images/photos/products/home-page/product5.webp",
      price: 28.00,
    },
    {
      name: "FELIX DECAF",
      imagePath: "/assets/images/photos/products/home-page/product6.webp",
      price: 24.00,
    },
    {
      name: "CEREMONIAL MATCHA CANISTER",
      imagePath: "/assets/images/photos/products/home-page/product7.webp",
      hoverImage: "/assets/images/photos/products/home-page/product7-hover.webp",
      price: 34.00,
    },
    {
      name: "E-GIFT CARD (ONLINE ONLY)",
      imagePath: "/assets/images/photos/products/home-page/product8.webp",
      price: 10.00,
    },
    {
      name: "NESPRESSO COMPATIBLE PODS: FELIX ESPRESSO",
      imagePath: "/assets/images/photos/products/home-page/product9.webp",
      price: 15.00,
    },
  ]

  return (
    <div className="App">
      {/* <SpamTextHolder /> */}
      <Home productDetails={productDetails}/>
    </div>
  );
}

export default App;
