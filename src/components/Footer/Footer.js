import React, { Component } from 'react'
import {FooterContents} from "./FooterContents"
import './Footer.css'
import { Link } from 'react-router-dom';
import facebookLogo from '../../Images/facebook_icon.png';
import instaLogo from'../../Images/instagram_icon.png';
import linkedInLogo from'../../Images/linkedin_icon.png';

//Footer Component for webpage. This can be reused everywhere 

class Footer extends Component{
    state = {isClicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
                <nav className="FooterContents">
                    <h1 className="Footer-logo"></h1>
                    
                    <div className="Footer-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        
                    </div>
                    <ul className={this.state.clicked ? 'Footer-menu active' : 'Footer-menu'}>
                        {FooterContents.map((item,index)=>{
                            return(
                                <li key={index}><a className={item.cName} href={item.url} >
                                    {item.title}
                                    </a></li>      
                            )
                        })}
                        
                      
                        <a className="fb" href="https://www.facebook.com/TheRunwayapp"/>
                        
                        
                        <a className="insta" href="https://www.instagram.com/therunway_app/"/>
                    
                   
                    
                    <a className="linkedIn" href="https://www.linkedin.com/company/the-runway-app/"/>
                    
                   <div className="socialIcons">
                   <a className="fbMobile" href="https://www.facebook.com/TheRunwayapp"/>
                        
                        
                        <a className="instaMobile" href="https://www.instagram.com/therunway_app/"/>
                    
                   
                    
                    <a className="linkedInMobile" href="https://www.linkedin.com/company/the-runway-app/"/>
                   </div>
                        
                    
                        
                    
                    </ul>
                    
                </nav>
                


        )
    }
}

export default Footer