import React from "react";
import HighlightService from "./HighlightService/HighlightService";
import DiscountProduct from "./DiscountProduct/DiscountProduct";
import BestSeller from "./BestSeller/BestSeller";
import Products from "./Products/Products";
import Training from "./Training/Training";
import Quality from "./Quality/Quality";
import News from "./News/News";
import Feedback from "./Feedback/Feedback";
import Banner from "./Banner/Banner";

import "./Home.sass";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <HighlightService />
      <DiscountProduct />
      <BestSeller />
      <Products />
      <Training />
      <Quality />
      <News />
      <Feedback />
    </div>
  );
};

export default Home;
