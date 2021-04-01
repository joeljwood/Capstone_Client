
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
     const [fromData,setFormData] = useState({});
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
      key: 'answer1',
      reference: a1
    },{
      labelid: 1,
      key: 'answer2',
      reference: a2
    },{
      labelid: 2,
      key: 'answer3',
      reference: a3
    },
    {
      labelid: 3,
      key: 'answer4',
      reference: a4
    },
    {
      labelid: 4,
      key: 'answer5',
      reference: a5
    },
    {
      labelid: 5,
      key: 'answer6',
      reference: a6
    },
    {
      labelid: 6,
      key: 'answer7',
      reference: a7
    },]
 
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
                  <input type="radio" id="true" name="isTrue" value={true} ref={formElement.reference}/>
                  </label>
                  <label>No:
                  <input type="radio" id="false" name="isFalse" value={false} ref={formElement.reference}/>
                  </label>
                  </div>
              })}
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