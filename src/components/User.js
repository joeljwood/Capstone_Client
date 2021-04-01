//import react from 'react'
import react , {useRef,useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/UserForm.css";
import React from 'react';
import {NavLink} from 'react-router-dom'
//import Question from './Question'
//import { BrowserRouter , Route , Redirect ,Switch } from 'react-router-dom'


function User (props) {
   
      
       const firstnameEl = useRef(null);
       const lastnameEl =useRef(null);
       const emailEl =useRef(null);
       const phoneEl =useRef(null);
       const isInhabitant =useRef(null);
       const addressEl =useRef(null);
   

  function submitHandler(){
    console.log("result: ", "calling the server 1");
      const firstname= firstnameEl.current.value;
      const lastname= lastnameEl.current.value;
      const email= emailEl.current.value;
      const phone= phoneEl.current.value;
      const inhabitant= isInhabitant.current.value;
      const address=addressEl.current.value;
       const phonenumber = parseInt(phone);
      
       const fetchData = async () => {
        
      const queryResult= await axios.post(
       
        Constants.GRAPHQL_API,{
           
          query : `
          mutation {
            registerUser(firstName: "${firstname}" , lastName: "${lastname}" ,email: "${email}" ,
              phone:${phonenumber} ,isInhabitant:${inhabitant} ,address: "${address}")
              {
                  id
                  firstName
              }
          }
          `
        }
       
      );
      const userresult=queryResult.data.data;
      //pass this id through props maybe?
     console.log("result: ", userresult);
     
    }
    fetchData();
    window.location.href = "/question"
   }
 
    return(
     <form className="user-form" >
       <div className="form-control">
           <label htmlFor="firstname ">First Name</label>
           <input type="text"   id="firstname" ref={firstnameEl}/>
           </div>
           <div className="form-control">
           <label htmlFor="lastname ">Last Name</label>
           <input type="text"   id="lastname" ref={lastnameEl}/>
           </div>
           <div className="form-control">
           <label htmlFor="email ">Email</label>
           <input type="email"   id="email" ref={emailEl}/>
           </div>
           <div className="form-control">
           <label htmlFor="phone ">Phone</label>
           <input type="text"   id="phone" ref={phoneEl}/>
           </div>
           <div className="form-control">
           <label htmlFor="isInhabitanat ">Do you live here?</label>
           <label htmlFor="isInhabitantTrue">Yes:
           <input type="radio" id="true" name="isInhabitant" value={true} ref={isInhabitant}/>
           </label>
           <label htmlFor="isInhabitantFalse">No:
           <input type="radio" id="false"   name="isInhabitant" value={false} ref={isInhabitant}/>
           </label>
           </div>
           <div className="form-control">
           <label htmlFor="address ">Address</label>
           <input type="text"   id="address" ref={addressEl}/>
           </div>
       <div className="form-actions">
       <button type="button"  onClick={() => submitHandler()} >Submit</button>
       </div>
       </form>
    );
}



export default User;