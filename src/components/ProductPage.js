import { useParams } from "react-router-dom";
import ShopFooter from "./ShopFooter";
import "../CSS/ProductPage.css";
import oneTimeBox from "../assets/images/logos/one-time-box.svg"; // ******* CONTINUE HERE *******

function ProductPage({ productDetails }) {
  const { name } = useParams();
  const selectedProduct = productDetails.find((product) => product.name === name);

  return (
    <div className="product-page mt-32 flex flex-col justify-center w-full">
      <div className="product pb-12 flex flex-wrap w-full justify-evenly w-full mt-12">
        <div className="product-image w-1/2">
          <img src={selectedProduct.imagePath} alt="roaster's coffee subscription" />
        </div>

        <div className="product-details w-1/3 flex flex-col 1/2">
          <div className="details-header">
            <h1 className="tracking-widest leading-9 text-center text-4xl">{selectedProduct.name}</h1>
            <p className="pt-4 tracking-wider text-center font-bold text-base">
              ${selectedProduct.price.toFixed(2)}
            </p>
          </div>

          <div className="details-body flex flex-col mt-8 p-2 w-full">
            <h2 className="product-country-container">
              {!selectedProduct.country ? (
                <></>
              ) : (
                <div className="product-country flex justify-end font-black h-12 flex items-center">
                  Country
                  <p className="w-full h-full flex items-center">{selectedProduct.country}</p>
                </div>
              )}
            </h2>
            <h2 className="product-region-container">
              {!selectedProduct.region ? (
                <></>
              ) : (
                <div className="product-region flex justify-end font-black h-12 flex items-center">
                  Region
                  <p className="w-full h-full flex items-center text-end">
                    {selectedProduct.region.map((reg, index) => {
                      return (
                        <>
                          {reg}
                          {index !== selectedProduct.region.length - 1 &&( ", ")}
                        </>
                      );
                    })}
                  </p>
                </div>
              )}
            </h2>
            <h2 className="product-producer-container mb-1">
              {!selectedProduct.producer ? (
                <></>
              ) : (
                <div className="product-producer font-black flex">
                  Producer
                  <p className="text-end">
                    {selectedProduct.producer.map((prod, index) => {
                      return <>
                      {prod}
                      {index !== selectedProduct.producer.length - 1 && (", ")}
                      </>;
                    })}
                  </p>
                </div>
              )}
            </h2>
            <h2 className="product-farm-container">
              {!selectedProduct.farm ? (
                <></>
              ) : (
                <div className="product-farm flex justify-end font-black h-12 flex items-center">
                  Farm
                  <p className="w-full h-full flex items-center  text-end">
                    {selectedProduct.farm}
                  </p>
                </div>
              )}
            </h2>
            <h2 className="product-origin-container">
              {!selectedProduct.origin ? (
                <></>
              ) : (
                <div className="product-origin flex justify-end font-black h-12 flex items-center">
                  Origin
                  <p className="w-full h-full flex items-center">{selectedProduct.origin}</p>
                </div>
              )}
            </h2>
            <h2 className="product-harvest-container">
              {!selectedProduct.harvest ? (
                <></>
              ) : (
                <div className="product-harvest flex justify-end font-black h-12 flex items-center ">
                  Harvest
                  <p className=" w-full h-full flex items-center">{selectedProduct.harvest}</p>
                </div>
              )}
            </h2>
            <h2 className="product-process-container">
              {!selectedProduct.process ? (
                <></>
              ) : (
                <div className="product-process flex justify-end font-black h-12 flex items-center ">
                  Process
                  <p className=" w-full h-full flex items-center">{selectedProduct.process}</p>
                </div>
              )}
            </h2>
            <h2 className="product-cultivar-container">
              {!selectedProduct.cultivar ? (
                <></>
              ) : (
                <div className="product-cultivar flex justify-end font-black h-12 flex items-center ">
                  Cultivar
                  <p className="w-full h-full flex items-center">
                    {selectedProduct.cultivar.map((culti) => {
                      return <>{culti} - </>;
                    })}
                  </p>
                </div>
              )}
            </h2>
            <h2 className="product-variety-container">
              {!selectedProduct.region ? (
                <></>
              ) : (
                <div className="product-variety flex justify-end font-black h-12 flex items-center ">
                  Variety
                  <p className=" w-full h-full flex items-center">{selectedProduct.variety}</p>
                </div>
              )}
            </h2>
            <h2 className="product-proc-method-container">
              {!selectedProduct.procMethod ? (
                <></>
              ) : (
                <div className="product-proc-method flex justify-end font-black h-12 flex items-center ">
                  Proc.Method
                  <p className=" w-full h-full flex items-center">{selectedProduct.procMethod}</p>
                </div>
              )}
            </h2>
            <h2 className="product-altitude-container">
              {!selectedProduct.procMethod ? (
                <></>
              ) : (
                <div className="product-altitude flex justify-end font-black h-12 flex items-center ">
                  Altitude
                  <p className=" w-full h-full flex items-center">{selectedProduct.altitude}</p>
                </div>
              )}
            </h2>
            <h2 className="product-description-container p-4 text-center">
              {!selectedProduct.description ? (
                <></>
              ) : (
                <div className="product-description font-black">
                  <p>{selectedProduct.description}</p>
                </div>
              )}
            </h2>
            <h2 className="product-notes-container">
              {!selectedProduct.notes ? (
                <></>
              ) : (
                <div className="product-notes flex justify-end font-black h-12 flex items-center ">
                  Notes
                  <p className=" w-full h-full flex items-center text-end">
                    {selectedProduct.notes.map((note, index) => {
                      return <>
                      {note}
                      {index !== selectedProduct.notes.length - 1 && (", ")}
                      </>;
                    })}
                  </p>
                </div>
              )}
            </h2>
            <img src={oneTimeBox} alt="one time purcase shopping bag icon" />
          </div>
          {/* // ******* CONTINUE HERE ******* */}
        </div>
      </div>
      <ShopFooter />
    </div>
  );
}

export default ProductPage;
