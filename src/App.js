// import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import Blockcomp from './components/Blockcomp/Blockcomp';
// import Cards from './components/Cards/Cards';
// import CardsNFT from './components/CardsNFT/CardsNFT';
// import FootMessage from './components/FootMessage/FootMessage'
// import Footer from './components/Footer/Footer'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Carousel from './components/Carousel/Carousel'
// import { CarouselData } from './components/Carousel/CarouselData';
// import CarouselNFT from './components/CarouselNFT/CarouselNFT';
// import {CarouselNFTContents} from './components/CarouselNFT/CarouselDataNFT'
// import SignUp from './components/SignUp/SignUp'
// function Homepage() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="containComps">
//       <Blockcomp/>
//       </div>
//       <span className="v133_304">How The Runway Helps You</span>
//       <div id="container"></div>
//       <Cards/>
//       <Carousel slides={CarouselData} />
//       <CarouselNFT slides={CarouselNFTContents}/>
//       <CardsNFT/>
//       <FootMessage/>
//       <Footer/>
//       <a className="copyRight" href="#">@2021 by The Runway Inc.</a>
    
//       {/* <div className="block"><Blockcomp/></div>
      
//       <div className="block"><Blockcomp/></div>
      
//       <div className="block">
//         <Blockcomp/>
//       </div> */}
      
      

//     </div>
//   );
// }
 
// export default Homepage;


import React from 'react';

import './index.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login'
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    // Setting up routing of the different pages 
    <HashRouter>
  <Switch>
   <Route exact path="/" component={Homepage}/>
   <Route path="/signup" component={SignUp}/>
   <Route path="/login" component={Login}/>
  </Switch>
  
    </HashRouter>
  );
}
 
export default App;

 