import React, {useState} from 'react';


import {CarouselData} from './CarouselData'
import './Carousel.css'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length
    //This is a basic Carousel for the mobile version of the webpage 
    //There is a lot of documentation online for this 
    
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

    //These functions set the current slide to be the next or previous 
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1) 
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1) 
    }
                   
    
                 
            
        return(
            
            <section className="slider">
                <h1 className="CardTitle">Explore The Runway</h1>
                    <h1 className="CardHeading">FEATURED MODELS</h1>
                    <a className="viewMore" href="App.js">View More Models</a>
                <div className="left-arrow" onClick={prevSlide} /> 
                
                <div className="right-arrow" onClick={nextSlide}/>
                {/* Same type of implementation as seen in the Block Component and Cards... Backend will once again have to be added to fetch random/current items */}
                {CarouselData.map((slide, index) => {

                    return(
                        
                        <div className ={index === current ?'slide active' : 'slide'} key={index}>
                            {index === current && (
                            <div className="ModelImg">
                        <li key={index}>
                           <div className={`ModelPic${index}`}>

                 
                            
                            <a className="ModelName" href={`${slide.modelUrl}`}>
                            {slide.modelName}
                            </a>
                            </div>
                              
                                
                                
                              
                              
                                
                              
                              
                              
                            </li> 
                            </div>)}
                        
                            </div>
                    )
                })}


            </section>
           
        );
    
}

export default Carousel