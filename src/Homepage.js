import './App.css';
import Navbar from './components/Navbar/Navbar'
import Blockcomp from './components/Blockcomp/Blockcomp';
import Cards from './components/Cards/Cards';
import CardsNFT from './components/CardsNFT/CardsNFT';
import FootMessage from './components/FootMessage/FootMessage'
import Footer from './components/Footer/Footer'
import React from 'react';

import Carousel from './components/Carousel/Carousel'
import { CarouselData } from './components/Carousel/CarouselData';
import CarouselNFT from './components/CarouselNFT/CarouselNFT';
import {CarouselNFTContents} from './components/CarouselNFT/CarouselDataNFT'

function Homepage() {
  return (
    <div className="App">
      <Navbar/>
      <div className="containComps">
      <Blockcomp/>
      </div>
      <span className="v133_304">How The Runway Helps You</span>
      <div id="container"></div>
      <Cards/>
      <Carousel slides={CarouselData} />
      <CarouselNFT slides={CarouselNFTContents}/>
      <CardsNFT/>
      <FootMessage/>
      <Footer/>
      <a className="copyRight" href="#">@2021 by The Runway Inc.</a>
    
      {/* <div className="block"><Blockcomp/></div>
      
      <div className="block"><Blockcomp/></div>
      
      <div className="block">
        <Blockcomp/>
      </div> */}
      
      

    </div>
  );
}
 
export default Homepage;
