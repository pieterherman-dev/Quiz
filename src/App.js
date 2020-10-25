import React, { useState } from 'react';
import Alert from '@material-ui/core/Button';

import './App.css';


export default function App() {
  var questions = require('./data/questions.json');

 

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  let [showAlert, setAlert] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
      setAlert(showAlert = true);
      setScore(score + 1);
      
		} else {
      setAlert(showAlert = false);

    }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
  

 
		<div className='app'>
 

			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> {currentQuestion + 1}</span>/{questions.length}
          	</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
   
				</>
			)}
		</div>
	);
}