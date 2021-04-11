
import react , {useRef,useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/UserForm.scss";
import "../assets/radio.scss";
import voiceimage from '../assets/voiceimage.jpg';
import React from 'react';
import { useHistory } from 'react-router';
//import {NavLink} from 'react-router-dom'

function User ({setResult}) {
      const history = useHistory();
      const [dataOperator,setDataOperator] =useState({ });
      const [dataBuilding,setDataBuilding] =useState({ });
       const firstnameEl = useRef(null);
       const lastnameEl =useRef(null);
       const emailEl =useRef(null);
       const phoneEl =useRef(null);
       const isInhabitant =useRef(null);
       const addressEl =useRef(null);
   

       useEffect(() => {
        const fetchData = async () => {
          const queryOperator= await axios.post(
            Constants.GRAPHQL_API, {
              query:Constants.GET_Operator_QUERY
            }
          );

          
            const queryBuilding= await axios.post(
              Constants.GRAPHQL_API, {
                query:Constants.GET_Building_QUERY
              }
            );
        
          //get operator data 
          const resultoperator=queryOperator.data.data;
             console.log("result: ", resultoperator);
             setDataOperator(resultoperator);
             //get building data
             const resultbuilding=queryBuilding.data.data;
             console.log("result: ", resultbuilding);
             setDataBuilding(resultbuilding);
            
        }
          fetchData();
        },[] )


  function submitHandler(){
    
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
      setResult(userresult.registerUser);
     
    
     
      // props=userresult.registerUser;
      // console.log("result: ", props);
      history.push('/question');
    }
    fetchData();
    //window.location.href = "/question?";

   }
 
    return(
    
     <div className="signupSection">
     <div className="info">
     {
      dataBuilding.building &&
      
      <h2>Address  |  {dataBuilding.building.address}</h2>
     
      }
     <img src={voiceimage} width="400px" height="450px" alt="voiceimage.jpg"/>
     {
      dataOperator.operator &&
      
      <h2>Operator  |  {dataOperator.operator.first_name}</h2>
     
      }

     
     </div>
      <form className="signupForm">
      <h2>Register</h2>
      <ul className="noBullet">
      <li>
      
     
      <label htmlFor="firstname ">Firstname :</label>
           <input type="text"   id="firstname" name="firstname"
            placeholder="Firstname" autoComplete="off" 
            className="inputFields" ref={firstnameEl} required/>
           
    
      </li>
     
      <li>
      
      <label htmlFor="lastname">Lastname :</label>
           <input type="text"   id="lastname" name="lastname"
            placeholder="Lastname" autoComplete="off" 
            className="inputFields" ref={lastnameEl} required/>
          
      </li>
      
      <li>
      
      <label htmlFor="email">Email :</label>
           <input type="text"   id="email" name="email"
            placeholder="Email" autoComplete="off" 
            className="inputFields" ref={emailEl} required/>
          
      </li>
     
      <li>
      <label htmlFor="phone">Phone :</label>
           <input type="text"   id="phone" name="phone"
            placeholder="Phone" autoComplete="off" 
            className="inputFields" ref={phoneEl} required/>
          
      </li>

      <li>
      
      
     
      <ul className="list">
      <h3> Do you live here ? </h3>
      <ol className="list__item">
     
           <input type="radio" id="true" name="isInhabitant" className="radio-btn"  value={true} ref={isInhabitant}/>
           <label htmlFor="true" className="label">Yes</label>
           </ol>
           <ol className="list__item">
          
           <input type="radio" id="false"   name="isInhabitant" className="radio-btn" value={false} ref={isInhabitant}/>
           <label htmlFor="false" className="label">No</label>
           </ol>
           </ul>
      </li>
     
      <li>
      <label htmlFor="address">Address :</label>
           <input type="text"   id="address" name="address"
            placeholder="Address" autoComplete="off" 
            className="inputFields" ref={addressEl} required/>
          
      </li>
       </ul>


       
    <a href="#" onClick={()=> submitHandler()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
     </form>
      </div>
     
    );
}

export default User;