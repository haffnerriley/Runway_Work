import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../SignUp/SignUp.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Button } from '../Button';
import {Link} from "react-router-dom";
import axios from 'axios';
//function that renders the errors if any
function EmailError(props){

  return (
      <div className={props.display}>
        <a className="errorMessages">{props.errorMsg}</a>
      
      </div>
  ) 
  
}
//This is our SignUp component 
class SignUP extends Component{
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
  //Sets states 
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    onSubmit = e => {
        e.preventDefault();
        
        
    
      //Here is all our user data including errors 
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      hasErrors: this.state.hasErrors,
      fieldErrors: this.state.fieldErrors
      
      
    };
    // Once again the following will most likely have to be changed based on your URL or if a cloud instance is being used
    // See comments on login page for more explanations of the stuff below
    axios
      .post('http://localhost:8082/api/users/register', data)
      .then(res => {
        //  console.log(res.data);
         
           var badUser = false;
           var badEmail = false;
           var badPassword = false;
           
           
           if(res.data._id === undefined){
            
            //  var errMsg = "";


            if(res.data.username === "Username already in use!" || res.data.username === "Name field is required"){ 
                //console.log("Is here");
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.username
                })
              
                badUser = true;
              
              
              //alert("Username already in use!");
             }
             if(res.data.email !== undefined){
              if(badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " +res.data.email
                })
              }
              else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.email
                })
              }
              
              badEmail = true;
              //alert(res.data.email); 
             }
             if(res.data.password !== undefined){
              if(badEmail || badUser){
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
              
              badPassword = true;
                //alert(res.data.password);
             }
             if(res.data.password2 !== undefined){
               if(badPassword || badEmail || badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " + res.data.password2
                })
               }
               else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.password2
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
    
            console.log("Added User");
            alert("Thanks for creating a new account!");
            this.props.history.push('/');
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
      
        return(
            
                <div className="SignUpPage">
                    
                    <Navbar/>
                   <div className="SignUpBody">
                    <h className= "SignUpHeader">Sign Up</h>
                    

                    <form className="SignUpForm" onSubmit={this.onSubmit}>
                      <EmailError display={this.state.hasErrors} errorMsg={this.state.fieldErrors}onChange={this.onChange}/>
                       <input type="text" placeholder="Username" className="username" color="black"name="username" value={this.state.username} onChange={this.onChange}/>
                       <input type="text" placeholder="Email Address" className="email"name="email"   value={this.state.email} onChange={this.onChange}/>
                       <input type="password" placeholder="Password" className="pword" name="password"  value={this.state.password} onChange={this.onChange}/>
                       <input type="password" placeholder="Confirm Password" className="confirmPword" name="password2" value={this.state.password2} onChange={this.onChange} />
                       <div className="termsDiv">
                                <label className="termsCheck">
                                <input type="checkbox"  /> 
                                <span class="termsStyle"></span>
                                </label>
                                <a className="agree"> I agree to The Runway's </a>
                                <a href="#" className="termsOfUse" >Terms Of Use </a> 
                                <a className="and">and </a> 
                                <a href="#" className="privacyPolicy" >Privacy Policy</a>
                                
                       </div>
                       {/* <Link to="/signup" className="signUpLabel"> */}
                       
                          <input type ="submit" className="registerButton" value="Sign Up"></input>
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
                      <Link to="/login" className="guestLabel">
                      <div className="hasAccountString">Already have an account?
                         <a href="#" className="loginURL">Log In</a>
                      </div>
                      </Link>
                       
                    </form>
                    
                   </div>

                  
                </div>



        )
    }
}

export default  SignUP


// Code below from https://stackoverflow.com/questions/44387318/linking-button-to-another-page





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
