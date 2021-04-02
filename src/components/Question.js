
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
     const [radio1, setRadio1] = useState('');
     const [radio2, setRadio2] = useState('');
     const [radio3, setRadio3] = useState('');
     const [radio4, setRadio4] = useState('');
     const [radio5, setRadio5] = useState('');
     const [radio6, setRadio6] = useState('');
     const [radio7, setRadio7] = useState('');

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
    
    function submitQuestions(){
      console.log(a1.current.value)
      const answer1= a1.current.value;
      const answer2= a2.current.value;
      const answer3= a3.current.value;
      const answer4= a4.current.value;
      const answer5= a5.current.value;
      const answer6= a6.current.value;
      const answer7= a7.current.value;

      
      const fetchData = async () => {
        const queryResultq1= await axios.post(
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
        const queryResultq2= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 2, userId: 1, robotId: 2, answers: "${answer2}"){
                answers
              }
            }
            `
          }
        );
        const queryResultq3= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 3, userId: 1, robotId: 2, answers: "${answer3}"){
                answers
              }
            }
            `
          }
        );
        const queryResultq4= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 4, userId: 1, robotId: 2, answers: "${answer4}"){
                answers
              }
            }
            `
          }
        );
        const queryResultq5= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 5, userId: 1, robotId: 2, answers: "${answer5}"){
                answers
              }
            }
            `
          }
        );
        const queryResultq6= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 6, userId: 1, robotId: 2, answers: "${answer6}"){
                answers
              }
            }
            `
          }
        );
        const queryResultq7= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 7, userId: 1, robotId: 2, answers: "${answer7}"){
                answers
              }
            }
            `
          }
        );
        
        const answerresult1=queryResultq1.data.data;
        const answerresult2=queryResultq2.data.data;
        const answerresult3=queryResultq3.data.data;
        const answerresult4=queryResultq4.data.data;
        const answerresult5=queryResultq5.data.data;
        const answerresult6=queryResultq6.data.data;
        const answerresult7=queryResultq7.data.data;
        console.log("result ", answerresult1, answerresult2, answerresult3, answerresult4, answerresult5, answerresult6, answerresult7);
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
              
            <div>
                {data.questions[0].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer1" name="answer1" onChange={e => setRadio1("yes")} value={radio1} ref={a1}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer1" name="answer1" onChange={e => setRadio1("no")} value={radio1} ref={a1}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[1].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer2" name="answer2" onChange={e => setRadio2("yes")} value={radio2} ref={a2}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer2" name="answer2" onChange={e => setRadio2("no")} value={radio2} ref={a2}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[2].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer3" name="answer3" onChange={e => setRadio3("yes")} value={radio3} ref={a3}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer3" name="answer3" onChange={e => setRadio3("no")} value={radio3} ref={a3}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[3].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer4" name="answer4" onChange={e => setRadio4("yes")} value={radio4} ref={a4}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer4" name="answer4" onChange={e => setRadio4("no")} value={radio4} ref={a4}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[4].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer5" name="answer5" onChange={e => setRadio5("yes")} value={radio5} ref={a5}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer5" name="answer5" onChange={e => setRadio5("no")} value={radio5} ref={a5}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[5].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer6" name="answer6" onChange={e => setRadio6("yes")} value={radio6} ref={a6}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer6" name="answer6" onChange={e => setRadio6("no")} value={radio6} ref={a6}/>
                  </label>
                  <br/>
                  <br/>
                {data.questions[6].question}<br/>
                  <label>Yes:
                  <input type="radio" id="answer7" name="answer7" onChange={e => setRadio7("yes")} value={radio7} ref={a7}/>
                  </label>
                  <label>No:
                  <input type="radio" id="answer7" name="answer7" onChange={e => setRadio7("no")} value={radio7} ref={a7}/>
                  </label>
            </div>
              
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