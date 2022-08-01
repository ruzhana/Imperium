import React, { useState } from 'react';
import { useEffect } from 'react';
import './task.css';

export default function Lol() {
	const questions = [
		{
			questionText: 'Q1',
			answerOptions: [
				{ answerText: 'A1', isCorrect: true },
				{ answerText: 'A2', isCorrect: true },
				{ answerText: 'A3', isCorrect: true },
				{ answerText: 'A4', isCorrect: true },
			],
		},
		{
			questionText: 'Q2',
			answerOptions: [
				{ answerText: 'A1', isCorrect: true },
				{ answerText: 'A2', isCorrect: true },
				{ answerText: 'A3', isCorrect: true },
				{ answerText: 'A4', isCorrect: true },
			],
		},
		{
			questionText: 'Q3',
			answerOptions: [
				{ answerText: 'A1', isCorrect: true },
				{ answerText: 'A2', isCorrect: true },
				{ answerText: 'A3', isCorrect: true },
				{ answerText: 'A4', isCorrect: true },
			],
		},
		{
			questionText: 'Q4',
			answerOptions: [
				{ answerText: 'A1', isCorrect: true },
				{ answerText: 'A2', isCorrect: true },
				{ answerText: 'A3', isCorrect: true },
				{ answerText: 'A4', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		localStorage.setItem('score', score);
	}, [score]);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			const oldScore = localStorage.getItem('Totalscore');
			localStorage.setItem('Totalscore', Number(oldScore) + score);
		}
	};
	return (
        <div className='lll'>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
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
        </div>
	);
}