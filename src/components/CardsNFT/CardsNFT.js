import React, {Component} from 'react'
import {CardsNFTContents} from "./CardsNFTContents"
import './CardsNFT.css'


//Same as Cards except with different HTML layout and CSS that includes prices and time left 
//In the future, backend for this will have to be implemented to fetch prices, content and links to each NFT item
class CardsNFT extends Component{
    state = {isClicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        return(
                <div className="CardsNFTContent">
                    
                    <h1 className="CardHeadingNFT">FEATURED NFT ITEMS</h1>
                    <a className="viewMoreNFT" href="App.js">View More NFT items</a>
                        
                    
                    
                        {CardsNFTContents.map((item,index)=>{
                            return(
                                <div className="ModelImgNFT">
                                <li key={index}>
                                   <div className={`ModelPicNFT${index}`}>

                         
                                  
                                    <a className="ModelNameNFT" href={`${item.modelUrl}`}>
                                    {item.modelName}
                                    </a>
                                    <div onClick={this.handleClick}>
                                    <i onClick={this.handleClick}className={this.state.clicked ? `isLiked${index}` : `likeIcon${index}`}></i>
                                    
                                    </div>
                                    
                                    <a className="NameNFT">{item.nameNFT}</a>
                                    <div className="itemDetails">
                                    <a className="itemPrice">{item.price}</a>
                                    <a className="itemTime">{item.time}</a>
                                    <a className="buyItem" href="App.js">{item.type}</a>
                                    </div>
                                   </div>
                                      
                                        
                                        
                                      
                                      
                                        
                                      
                                      
                                      
                                    </li> 
                                    </div>
                            )
                        })}
                        
                        
                </div>



        )
    }
}

export default CardsNFT