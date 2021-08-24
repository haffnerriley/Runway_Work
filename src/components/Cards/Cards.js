import React, {Component} from 'react'
import {CardContents} from "./CardContents"
import './Cards.css'





// This component creates the cards with the featured models. Follows a similar layout to the Block Component

class Cards extends Component{
    state = {isClicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    
    
    render(){
        return(
                <div className="CardsContent">
                    <h1 className="CardTitle">Explore The Runway</h1>
                    <h1 className="CardHeading">FEATURED MODELS</h1>
                    <a className="viewMore" href="App.js">View More Models</a>
                        
                    
                    
                        {CardContents.map((item,index)=>{
                            return(
                                <div className="ModelImg">
                                <li key={index}>
                                   <div className={`ModelPic${index}`}>

                         
                                    
                                    <a className="ModelName" href={`${item.modelUrl}`}>
                                    {item.modelName}
                                    </a>
                                    </div>
                                      
                                        
                                        
                                      
                                      
                                        
                                      
                                      
                                      
                                    </li> 
                                    </div>
                            )
                        })}
                        
                        
                </div>



        )
    }
}

export default Cards