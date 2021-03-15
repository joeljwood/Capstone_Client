//import react from 'react'
import { GET_ROBOTS_QUERY } from '../constants'
import react , {useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/style.css";
function Question (props) {

     const [data,setData] = useState( { questions : [] } );

     const [currentquestion,setcurrentquestion] =useState(0);
     const next =() =>{
      if(currentquestion < data.questions.length -1 ){
     const nextquestion=currentquestion +1;
     setcurrentquestion(nextquestion);
      }
      else{
        setcurrentquestion(currentquestion);
      }
     };
     const previous =() =>{
       if(currentquestion > 0){
      const previousquestion=currentquestion - 1;
      setcurrentquestion(previousquestion);
     }
     else {
      setcurrentquestion(currentquestion);
     }
      };
    useEffect(() => {
      const fetchData = async () => {
   //call graphql api
   const queryResult= await axios.post(
     Constants.GRAPHQL_API, {
       query:Constants.GET_QUESTIONS_QUERY
     }
   );
     //update the component state
     const result=queryResult.data.data;
     console.log("result: ", result);
    setData({ questions: result.allQuestions })
      };
    fetchData();
    },[] )
 
    return(
        <div className="container">
        <div className="title">COVID-19 Questionare</div>
        {console.log("data: ", data)}
      <div>
       <h1>List of Questions</h1>
     <ul>
   
   {
    data && data.questions.length > 0 &&
    <ol>
 
      <div className='question_text'>{data.questions[currentquestion].question}</div>
       <div className='answer_section'>
           <button className='questionBox'>Yes</button>
           <button  className='questionBox'>No</button>
       </div>
       <div>
       <button onClick={() => previous()}>previous question</button>
         <button onClick={() => next()}>Next question</button>
         
       </div>
   
      </ol>
  }
    
    
     
   </ul>
  
       </div>
       
       </div> 
        
    );
}

const question_01 = ({data: {}})

export default Question;