import React, { Component } from 'react'
import './Blockcomp.css'
import {Button} from "../Button"
import {HomePageContents} from "./HomePageContents"
// const STYLES = [
//     'BlockCompRight',
//     'BlockCompLeft'
// ]

// This component is for the homepage. It can be used else where if needed. 


   


 class Blockcomp extends Component{
    

     render(){

        return(
            
                // Main container for our contents 
            <div className="homepage">
            {/* This retrieves the contents of HomePageContents and maps the data to our elements below */}
            {HomePageContents.map((item,index)=>{
                return(
                    <li key={index} className="homepage">
                    <div className={`BlockContents${index}`}>
                        <div className={`BlockImg${index}`}>
                            
                        </div>
                        {/* <div className={`BlockText${index}`}> */}
                    
                    <div className={`BlockHeading${index}`}>
                        <span className={`BlockTitle${index}`}>{item.title}<br></br> </span>
                        {/* <br></br>
                        <br></br> */}
                        <span className={`BlockParagraph${index}`}>{item.text}
                        <br></br>
                        
                        
                        <div className={`BlockButton${index}`}>
                            <br></br>
                        <Button display="block">Get Started</Button>
                        </div>
                        
                        </span>
                    </div>
                    
                    {/* <div className={`BlockHeading${index}`}>
                    
                        <span className={`BlockParagraph${index}`}>{item.text}
                        <br></br>
                        
                        <br></br>
                        <div className={`BlockButton${index}`}>
                            <br></br>
                        <Button>Get Started</Button>
                        </div>
                        
                        </span>
                        
                    </div> */}
                    
                {/* </div> */}
                
                
            </div>
            </li>
                )
            })}
            </div>
            
            
            
        )


    }
 }


export default Blockcomp


