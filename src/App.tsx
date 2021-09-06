import React from "react";
import "./App.css";
import Header from "./components/Header/Header.component";
import Gif_Container from "./components/Gif_Container/Gif_Container.component";
import Intro from "./components/Intro/Intro.component";
import PraragraphContainer from "./components/PraragraphContainer/PraragraphContainer.component";
import CKC from "./components/CKC/CKC.compnent";
import RoadMap from "./components/RoadMap/RoadMap.component";
import Footer from "./components/Footer/Footer.component";
import banner from "./imgs/banner.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="PraragraphContainer">
        <Gif_Container />
        <div className="app_intro">
          <Intro />
        </div>
        <PraragraphContainer
          title="Price"
          paragraph="Every Calabasas Kid costs 0.05 ETH and the max cap per mint is 20."
        />
        <PraragraphContainer
          title="WHO IS THE KID"
          paragraph="THE KID is an alias used for the creator of Calabasas Kid Club. She
        grew up in Los Angeles County, and later work in Calabasas as a
        personal assistant to a well-known family in the entertainment
        industry. This collection was originally inspired by her take on the
        kids of Calabasas who tend to have all the high-end luxuries and
        products everyone wishes they had."
        />
        <CKC />
        <RoadMap />
        <Footer />
      </div>
      {/* <img src={banner} alt="banner" className="app_banner" /> */}
    </div>
  );
}

export default App;
