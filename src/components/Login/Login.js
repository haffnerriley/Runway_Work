import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../Login/Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Button } from '../Button';
import {Link} from "react-router-dom";
import axios from 'axios';


// This is the Login Compoent
//This is still in progress as it needs to be checked over for web security purposes 
//In addition, the backend should be improved as I just started this component and tried to get it to work on a basic level
//Tokens and sessions need to be added 
//Error handling for the backend and frontend needs to be improved. I just tried to get a basic version working for testing

function EmailError(props){

  return (
      <div className={props.display}>
        <a className="errorMessages">{props.errorMsg}</a>
      
      </div>
  ) 
  
}

class Login extends Component{

  // Some of these fields are not necessary and should/could be removed 
    constructor() {
    super();
    this.state = {
      username: '',
      email:'',
      password:'',
      password2:'',
      hasErrors: 'noError',
      fieldErrors: ''
      
    };
  }
  // Sets the values of the fields on change 
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    onSubmit = e => {
        e.preventDefault();
        
        
    
      // data array of user info and errors 
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      hasErrors: this.state.hasErrors,
      fieldErrors: this.state.fieldErrors
      
      
    };
    axios
      // This post request should be changed to be whatever your URL is if working locally. 
      // You may have to change some of this if you transition to a cloud instance for hosting
      //This sends data to the backend server where it is verified through different validation functions
      //that check with the database
      .post('http://localhost:8082/api/users/login', data)
      .then(res => {
         //console.log(res.data);

         //The following below will most likely need to be changed in the future
         //I didn't make an error controller on the backend as I was just trying to get the login to work before 
         //diving into the error controller and tokens 
         if(res.data === "Login Sucessful!"){
             alert("Logged in");
            this.props.history.push('/');
         }
         
           var badUser = false;
           var badEmail = false;
           var badPassword = false;
           //Checking if any errors are being returned from the backend 
           
           if(res.data._id === undefined){
            //if res.data._id is undefined then we have some sort of error 
            //  var errMsg = "";


            if(res.data.passwordincorrect === "Password incorrect" ){ 
                //console.log("Is here");
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.passwordincorrect
                })
              
                badUser = true;
              
              
              //alert("Username already in use!");
             }
             if(res.data.emailnotfound === "Email not found"){
              if(badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " +res.data.emailnotfound
                })
              }
              else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.emailnotfound
                })
              }
              
              badEmail = true;
              //alert(res.data.email); 
             }
             if(res.data.email !== undefined){
              if(badEmail || badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " + res.data.email
                })
              }
              else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.email
                })
              }
              
              badPassword = true;
                //alert(res.data.password);
             }
             if(res.data.password !== undefined){
               if(badPassword || badEmail || badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " + res.data.password
                })
               }
               else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.password
                })
               }
              
              
              //alert(res.data.password2);
             }
              
            

             
             
           }
           else{
            this.setState({
              username: '',
              email: '',
              password: '',
              password2: '',
              hasErrors: 'noError',
              fieldErrors: ''
              
            })
    
            //console.log("Added User");
            //alert("Thanks for creating a new account!");
           // this.props.history.push('/');
           }
         
        //console.log("poop");
       
      })
      //.then(res => console.log(res.email)) 
      //////.catch(err => err.json(err));
      //.then(res => res.json(res)) this ome
        .catch(err => {
          console.log(err); 
          alert(err);
        })
      
  };

    render(){
      // Some of the CSS could be changed but I just finished the signup and wanted to get the login working asap
        return(
            
                <div className="SignUpPage">
                    
                    <Navbar/>
                   <div className="SignUpBody">
                    <h className= "SignUpHeader">Login</h>
                    

                    <form className="SignUpForm" onSubmit={this.onSubmit}>
                      <EmailError display={this.state.hasErrors} errorMsg={this.state.fieldErrors}onChange={this.onChange}/>
                       
                       <input type="text" placeholder="Email Address" className="email"name="email"   value={this.state.email} onChange={this.onChange}/>
                       <input type="password" placeholder="Password" className="pword" name="password"  value={this.state.password} onChange={this.onChange}/>
                       
                       
                       {/* <Link to="/signup" className="signUpLabel"> */}
                       
                          <input type ="submit" className="registerButton" value="Log in"></input>
                          <div className="resetPassword">
                                
                                
                                
                                <a className="agree"> Forgot your password? </a>
                                <a href="#" className="termsOfUse" >Reset Password </a> 
                                
                                
                       </div>
                      {/* </Link> */}
                      <div className="orDiv">
                        ────────────────────────── OR ──────────────────────────  
                      </div>
                      <div className="orDivMobile">
                        ───────────── OR ─────────────  
                      </div>
                      <Link to="/guest" className="guestLabel">
                          <button className="guestButton">Continue As Guest</button>
                      </Link>
                      <Link to="/signup" className="signUpLink">
                      <div className="noAccount">
                        New to the Runway? <a href="#" className="loginURL">Sign Up</a>
                      </div>
                      </Link>
                       
                    </form>
                    
                   </div>

                  
                </div>



        )
    }
}

export default  Login


// Code below from https://stackoverflow.com/questions/44387318/linking-button-to-another-page





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
