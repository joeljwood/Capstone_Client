//import react from 'react'
import { GET_ROBOTS_QUERY } from '../constants'
import react , {useEffect,useState} from 'react'
import * as Constants from '../constants'
import axios from 'axios'

function Robot (props) {

     const [data,setData] =useState( { robots: [] } );

    useEffect(() => {
      const fetchData = async () => {
   //call graphql api
   const queryResult= await axios.post(
     Constants.GRAPHQL_API, {
       query:Constants.GET_ROBOTS_QUERY
     }
   )
     //update the component state
  
  
     const result=queryResult.data.data;
     console.log("result: ", result);
     setData({ robots: result.allRobots })
      };
    fetchData();
    }, [])
  
    return(

       <div>
      <div>
       <h1>List of video</h1>
     {console.log("data: ", data)}
     <ul>
     {data && data.robots.map(item => (

       <li key={item.id}>
        {item.description}
       </li>
     ))}
     </ul>
       </div>
       </div> 
    );
}

export default Robot;