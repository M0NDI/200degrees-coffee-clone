import React from 'react';
import Navbar from './Navbar';
import MediaSideScroll from './MediaSideScroll';
import HomeShop from './HomeShop';

const Home = ({productDetails}) => {
  return (
    <div>
      <Navbar />
      <MediaSideScroll />
      <HomeShop productDetails={productDetails}/>
    </div>
  )
}

export default Home