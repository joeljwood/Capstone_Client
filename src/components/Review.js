/*import React, {useRef} from "react";
import "../assets/style.css";
import Questions from "./Question";
import ReactDom from "react-dom";

     const a1 =useRef(null);
     const a2 =useRef(null);
     const a3 =useRef(null);
     const a4 =useRef(null);
     const a5 =useRef(null);
     const a6 =useRef(null);
     const a7 =useRef(null);


function ReviewPage() {
    var allQuestions = 0;
    var noAnswers = 0;

    var answer1 = React.findDOMNode(this.refs.a1).value;
    var answer2 = React.findDOMNode(this.refs.a2).value;
    var answer3 = React.findDomNode(this.refs.a3).value;
    var answer4 = React.findDomNode(this.refs.a4).value;
    var answer5 = React.findDomNode(this.refs.a5).value;
    var answer6 = React.findDomNode(this.refs.a6).value;
    var answer7 = React.findDomNode(this.refs.a7).value;
    

    switch (answer1) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer2) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer3) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer4) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer5) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer6) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    switch (answer7) {
        case 'Yes':
            allQuestions++;
            break;
        case 'No':
            noAnswers++;
            allQuestions++;
            break;
    }
    if (allQuestions = 7) {
        if (noAnswers = 7) {
            return (
                <form className="review" >
				<div className="review-pass">You have been cleared and will be allowed in</div>
				</form>

            );
           

        }
        else {
            return (
			 <form className="review" >
               <div className="review-fail">I'm sorry due to your answers we cannot allow you into the building</div>
                </form>
            );


        }
    }
    else {
        return (
		<form className="review" >
            <div className="review-answerALLq">Please answer all questions</div>
        </form>
		);
    }

}

export default ReviewPage;*/