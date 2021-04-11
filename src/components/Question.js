
import react, {useRef, useEffect,useState} from 'react'
import * as Constants from '../constantsquestion'
import axios from 'axios'
import "../assets/style.scss";
import "../assets/typing.scss";
import voiceimage from '../assets/voiceimage.jpg';
import stop from '../assets/images/stop.jpg';
import virus from '../assets/images/virus.jpg';
import access from '../assets/images/access.jpg';
function Question ({result}) {
  const {id, firstName} = result;
  
     //const search = props.location.search;
     //const params = new URLSearchParams(search);
     //const userid = params.get('id');
     //console.log(userid);

    //create references for each answer to pass into the submit questions function
     const a1 =useRef(null);
     const a2 =useRef(null);
     const a3 =useRef(null);
     const a4 =useRef(null);
     const a5 =useRef(null);
     const a6 =useRef(null);
     const a7 =useRef(null);
     //set use state for the questions and the radio buttons
     const [page, setPage] = useState(true);
     const [review, setReview] = useState(false);
     const [dataRobot,setDataRobot] =useState({ });
     const [dataOperator,setDataOperator] =useState({ });
     const [data,setData] = useState( { questions : []} );
     const [radio1, setRadio1] = useState('');
     const [radio2, setRadio2] = useState('');
     const [radio3, setRadio3] = useState('');
     const [radio4, setRadio4] = useState('');
     const [radio5, setRadio5] = useState('');
     const [radio6, setRadio6] = useState('');
     const [radio7, setRadio7] = useState('');
     const [message, setMessage] = useState('');
     const [pic, setPic] = useState('');

    //calls graphql on load and gets questions from the database
    useEffect(() => {
      const fetchData = async () => {
   //call graphql api
   const queryResult= await axios.post(
     Constants.GRAPHQL_API, {
       query:Constants.GET_QUESTIONS_QUERY
     }
   );

   const queryRobot= await axios.post(
    Constants.GRAPHQL_API, {
      query:Constants.GET_ROBOTS_QUERY
    }
  );
  const queryOperator= await axios.post(
    Constants.GRAPHQL_API, {
      query:Constants.GET_Operator_QUERY
    }
  );

  //get operator data 
  const resultoperator=queryOperator.data.data;
     console.log("result: ", resultoperator);
     setDataOperator(resultoperator);
  //get robot data 
  const resultrobot=queryRobot.data.data;
     console.log("result: ", resultrobot);
     setDataRobot(resultrobot);
     //update the component state
     const result=queryResult.data.data;
    setData({ questions: result.allQuestions })



    
      };
    fetchData();
    },[] )
    
    //submits answers to questions into the database
    function submitAnswers(){
      console.log(a1.current.value)
      const answer1= a1.current.value;
      const answer2= a2.current.value;
      const answer3= a3.current.value;
      const answer4= a4.current.value;
      const answer5= a5.current.value;
      const answer6= a6.current.value;
      const answer7= a7.current.value;
      const robotId=dataRobot.robot.id;
      const fetchData = async () => {
        const queryResultq1= await axios.post(
          Constants.GRAPHQL_API, {
            query: `
            mutation{
              newAnswer(questionId: 1, userId: ${id}, robotId: ${robotId}, answers: "${answer1}"){
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
              newAnswer(questionId: 2, userId:  ${id}, robotId:  ${robotId}, answers: "${answer2}"){
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
              newAnswer(questionId: 3, userId:  ${id}, robotId: ${robotId}, answers: "${answer3}"){
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
              newAnswer(questionId: 4, userId:  ${id}, robotId: ${robotId}, answers: "${answer4}"){
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
              newAnswer(questionId: 5, userId: ${id}, robotId: ${robotId}, answers: "${answer5}"){
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
              newAnswer(questionId: 6, userId:  ${id}, robotId: ${robotId}, answers: "${answer6}"){
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
              newAnswer(questionId: 7, userId:  ${id}, robotId: ${robotId}, answers: "${answer7}"){
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
        console.log("Answers ", answerresult1, answerresult2, answerresult3, answerresult4, answerresult5, answerresult6, answerresult7);
    }
    setPage(false);
    setReview(true);
    Review();
    fetchData();
    //window.location.href = "/review";
  }
  function backToQuestions(){
    setPage(true);
    setReview(false);
  }
function Review() {

  
    var allQuestions = 0;
    var noAnswers = 0;

      const answer1= a1.current.value;
      const answer2= a2.current.value;
      const answer3= a3.current.value;
      const answer4= a4.current.value;
      const answer5= a5.current.value;
      const answer6= a6.current.value;
      const answer7= a7.current.value;

    switch (answer1) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
            
    }
    switch (answer2) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer3) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer4) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer5) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer6) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer7) {
        case 'yes':
            allQuestions++;
            break;
        case 'no':
            noAnswers++;
            allQuestions++;
            break;
    }
    if (allQuestions === 7) {
        if (noAnswers === 7) {
          setMessage('You have been cleared and will be allowed');
          setPic(access);
          console.log(message);
        }else {   
			    setMessage(' Sorry due to your answers we cannot allow you into the building' );
          setPic(stop);
          console.log(message);   
        }

    } else {
        setMessage('Please answer all questions');
        console.log(message);
    }
  }

//export default Review;
 
    //renders a form with 7 questions and radio buttons to answer COVID-19 Questionare Submit save the data to the database
    return(
      <div className="signupSection">
      <div className="info">
     
   <h2>Welcome {firstName}</h2>
   
  
      <img src={voiceimage} width="400px" height="450px" alt="voiceimage.jpg"/>
      {
      dataOperator.operator &&
     
      <h2>Operator {dataOperator.operator.first_name}</h2>
    
      }
      </div>
{
  page &&
      <div className="signupForm">
       <h1>List of Questions</h1>
     <ul className="noBullet">
   
   {
    data && data.questions.length > 0 &&
    <ol>
 
      <div >{data.questions.allQuestions}</div>
        <form>
          
          <div >
              
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
         
          <a href="#"  onClick={() => submitAnswers()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
        </form>
      </ol> 
  }  
   </ul>
  
       </div>
}
{
 
  review && 
  <div className="signupForm">
  <form>
  <div className="css-typing">
  
    <p>{message}</p>
    </div>
     
    <img src={pic} width="250px" height="300px" alt="stop.jpg"/>
    <br>

    </br>
    <a href="#"  onClick={() => backToQuestions()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      backToQuestions
    </a>
    </form>
    </div>
} 


       </div> 
        
    );
}


export default Question;
