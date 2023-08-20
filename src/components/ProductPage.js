import { useParams } from "react-router-dom";
import ShopFooter from "./ShopFooter";
import "../CSS/ProductPage.css";
import oneTimeBox from "../assets/images/logos/one-time-box.svg"; // ******* CONTINUE HERE *******

function ProductPage({ productDetails }) {
  const { name } = useParams();
  const selectedProduct = productDetails.find((product) => product.name === name);

  return (
    <div className="product-page mt-32 flex flex-col justify-center">
      <div className="product pb-12 flex flex-wrap w-full justify-evenly outline">
        <div className="product-image w-4/12 flex justify-center outline">
          <img
            src={selectedProduct.imagePath}
            className="flex justify-center items-center w-full"
            alt="roaster's coffee subscription"
          />
        </div>

        <div className="product-details mt-12 w-96 flex flex-col justify-start outline">
          <div className="details-header">
            <h1 className="font-extrabold tracking-widest leading-9 text-center">
              {selectedProduct.name}
            </h1>
            <p className="pt-4 tracking-wider font-bold text-center">${selectedProduct.price.toFixed(2)}</p>
          </div>

          <div className="details-body flex flex-col justify-end">
            <h2 className="product-country">
              {!selectedProduct.country ? (
                <></>
              ) : (
                <div className="flex justify-start mt-8">
                  Country
                  <p>{selectedProduct.country}</p>
                </div>
              )}
            </h2>
            <h2>
              {!selectedProduct.region ? (
                <></>
              ) : (
                <div className="flex justify-start">
                  Region
                  <p>{selectedProduct.region}</p>
                </div>
              )}
            </h2>
            <h2 className="text-xs p-4 text-center">
              {!selectedProduct.description ? (
                <></>
              ) : (
                <div className="flex justify-start">
                  <p className="font-bold">{selectedProduct.description}</p>
                </div>
              )}
            </h2>
            <img src={oneTimeBox} alt="one time purcase shopping bag icon" />
          </div>{/* // ******* CONTINUE HERE ******* */}

          
        </div>
      </div>
      <ShopFooter />
    </div>
  );
}

export default ProductPage;
