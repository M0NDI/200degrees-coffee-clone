import React from 'react';
import HomeShop from './HomeShop';

// Shop parent
const Shop = ({ productDetails }) => {
  return (
    <div>
      <HomeShop productDetails={productDetails}/>
    </div>
  )
}

export default Shop
