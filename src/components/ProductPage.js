import { useParams } from "react-router-dom";
import ShopFooter from "./ShopFooter";
import "../CSS/ProductPage.css";
import oneTimeBox from "../assets/images/logos/one-time-box.svg"; // ******* CONTINUE HERE *******

function ProductPage({ productDetails }) {
  const { name } = useParams();
  const selectedProduct = productDetails.find((product) => product.name === name);

  return (
    <div className="product-page mt-32">
      <div className="product pb-12 flex w-full">
        <div className="product-image">
          <img
            src={selectedProduct.imagePath}
            className="w-5/12 pt-12"
            alt="roaster's coffee subscription"
          />
        </div>

        <div className="product-details w-96">
          <h2 className="pt-16 font-extrabold tracking-widest antialiased leading-9">
            {selectedProduct.name}
          </h2>
          <p className="pt-4 tracking-wider font-bold">${selectedProduct.price.toFixed(2)}</p>
          <img src={oneTimeBox} alt="one time purcase shopping bag icon" /> {/* // ******* CONTINUE HERE ******* */}
        </div>
      </div>
      <ShopFooter />
    </div>
  );
}

export default ProductPage;
