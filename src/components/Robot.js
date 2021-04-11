//import react from 'react'
import react , {useEffect,useState} from 'react'
import axios from 'axios'
import * as Constants from '../constantsquestion'

function Robot ({setRobot}) {

    
  const [data,setData] =useState({ });
    useEffect(() => {
      const fetchData = async () => {
   //call graphql api
   const queryRobot= await axios.post(
     Constants.GRAPHQL_API, {
       query:Constants.GET_ROBOTS_QUERY
     }
   )
     //update the component state
  

     const resultrobot=queryRobot.data.data;
     console.log("result: ", resultrobot);
     setData(resultrobot);
     
      };
      fetchData();
    },[])
   
    return(

       <div>
       {
         data.robot &&
      <div>
       <h1>List of robots</h1>
    
     <ul>
    

      
       <li>{data.robot.id}</li>
     
     </ul>
       </div>
      }
       </div> 
    );
}

export default Robot;