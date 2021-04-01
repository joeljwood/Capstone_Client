
import react, {useRef, useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/style.css";

function Question (props) {
    
     const a1 =useRef(null);
     const a2 =useRef(null);
     const a3 =useRef(null);
     const a4 =useRef(null);
     const a5 =useRef(null);
     const a6 =useRef(null);
     const a7 =useRef(null);
     const [data,setData] = useState( { questions : []} );
     const [radio, setRadio] = useState('');
     //const [answer, setAnswer] = useState([""]);
     //const score = 0;

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

    let formElements =[{
      labelid: 0,
      name: 'answer1',
      value: radio,
      reference: a1
    },{
      labelid: 1,
      name: 'answer2',
      key:false,
      reference: a2
    }]
    
    function submitQuestions(){
      console.log(a1.current.value)
      const answer1= a1.current.value;
      /*const answer2= a2.current.value;
      const answer3= a3.current.value;
      const answer4= a4.current.value;
      const answer5= a5.current.value;
      const answer6= a6.current.value;
      const answer7= a7.current.value;*/

      
      const fetchData = async () => {
        const queryResult= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 1, userId: 1, robotId: 2, answers: "${answer1}"){
                answers
              }
            }
            `
          }
        );
        const answerresult=queryResult.data.data;
        console.log("result ", answerresult)
    }
    fetchData();
    }
 
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
 
      <div className='question_text'>{data.questions.allQuestions}</div>
        <form>
          
          <div className='answer_section'>
              {formElements.map(formElement => {
                return <div>
                  {data.questions[formElement.labelid].question}<br/>
                  <label>Yes:
                  <input type="radio" id={formElement.name} name={formElement.name} onChange={e => setRadio("yes")} value= {radio} ref={formElement.reference}/>
                  </label>
                  <label>No:
                  <input type="radio" id={formElement.name} name={formElement.name} onChange={e => setRadio("no")} value={radio} ref={formElement.reference}/>
                  </label>
                  </div>
              })}
          </div>
          <div className="form-actions">
          <button type="button"  onClick={() => submitQuestions()} >Submit</button>
          </div>
        </form>
       

   
      </ol>
    
  }
    
    
     
   </ul>
  
       </div>
       
       </div> 
        
    );
}

export default Question;

/*{data.questions[currentquestion].id === numberOfQuestions ?(
  <Redirect to="/review" component={Review}/>
): null}*/