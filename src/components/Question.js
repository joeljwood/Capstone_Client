//import react from 'react'
import react, {useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/style.css";
import Review from './Review';
function Question (props) {
    
     const [data,setData] = useState( { questions : []} );
     const [currentquestion,setcurrentquestion] =useState(0);
     const numberOfQuestions = data.questions.length -1;
     const [answer, setAnswer] = useState([""]);
     const score = 0;

     const next =() =>{
      console.log({answer});
      if(currentquestion < numberOfQuestions ){
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

    function answersYes(){
      console.log(data.questions[currentquestion].id);
      
      if(answer.length === data.questions[currentquestion].id){
        console.log("here");
        setAnswer(answer => [...answer, 
          "yes"]);
        }
      else{
        console.log("here");
        answer[data.questions[currentquestion].id] = "yes";
      }
      
      /*if(answer.length === data.questions[currentquestion].id){
        setAnswer([answer.slice(data.questions[currentquestion].id,1,"yes")]);
      }*/
      
      //set answer array to contain current question
      
      //call method that changes data answered question to yes
      //axios.post(
      //  Constants.GRAPHQL_API, {
      //    MutationEvent:Constants.SET_ANSWER_MUTILATION
      //}
      //);
      };

    function answersNo(){
      
      //call method that changes data answered question to no
      console.log(data.questions[currentquestion].id);
      if(answer.length === data.questions[currentquestion].id){
        setAnswer(answer => [...answer, 
          "no"]);
      }else{
        console.log("here");
        answer[data.questions[currentquestion].id] = "no";
      }

      console.log({answer});
      //const yes= await.axios.post(
      //  Constants.GRAPHQL_API, {
      //    mutilation:Constants.SET_ANSWER_MUTILATION
      //}
      //);
      };
 
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
           <button onClick={answersYes} className='questionBox'>Yes</button>
           <button onClick={answersNo} className='questionBox'>No</button>
           <p>You answered {answer[data.questions[currentquestion].id]}</p>
       </div>
       <div>
       <button onClick={() => previous()}>previous question</button>
       <button onClick={() => next()}>Next question</button>
       {data.questions[currentquestion].id === 8?(
         <Route path="/review" component={Review}/>
       ): null}
       </div>
   
      </ol>
    
  }
    
    
     
   </ul>
  
       </div>
       
       </div> 
        
    );
}

export default Question;