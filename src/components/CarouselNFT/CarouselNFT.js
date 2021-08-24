import React, {useState} from 'react';


import {CarouselNFTContents} from './CarouselDataNFT'
import './CarouselNFT.css'


const CarouselNFT = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

    if(!Array.isArray(slides) || slides.length<= 0){
        return null;
    }

    // const slideType = () => {
    //     if(type === 1){
    //         return "none";
    //     }
    //     else{
    //         return "block";
    //     }
    // }


    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1) 
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1) 
    }
                   
    // Same exact thing as Carousel except for NFT items so HTML and CSS is slightly different to display more info
    //Backend for fetching items will have to be implemented 
                 
            
        return(
            
            <section className="slider">
              
                    
                    <h1 className="CardHeadingNFT">FEATURED NFT ITEMS</h1>
                    <a className="viewMoreNFT" href="App.js">View More NFT items</a>
                <div className="left-arrowNFT" onClick={prevSlide} /> 
                
                <div className="right-arrowNFT" onClick={nextSlide}/>
                
                {CarouselNFTContents.map((slide, index) => {

                    return(
                        
                        <div className ={index === current ?'slide active' : 'slide'} key={index}>
                            {index === current && (
                            <div className="ModelImgNFT">
                        <li key={index}>
                        <div className={`ModelPicNFT${index}`}>

                         
                                  
                                <a className="ModelNameNFT" href={`${slide.modelUrl}`}>
                                    {slide.modelName}
                                </a>
                                {/* <div onClick={this.handleClick}>
                                <i onClick={this.handleClick}className={this.state.clicked ? `isLiked${index}` : `likeIcon${index}`}></i>

                                </div> */}

                                <a className="NameNFT">{slide.nameNFT}</a>
                                <div className="itemDetails">
                                <a className="itemPrice">{slide.price}</a>
                                <a className="itemTime">{slide.time}</a>
                                <a className="buyItem" href="App.js">{slide.type}</a>
                                </div>
                        </div>
                              
                                
                                
                              
                              
                                
                              
                              
                              
                            </li> 
                            </div>)}
                        
                            </div>
                    )
                })}


            </section>
           
        );
    
}

export default CarouselNFT