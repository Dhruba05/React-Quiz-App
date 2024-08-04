import React, { useState } from 'react'
import QuestionList from './QuestionList'
import QuizStyle from './QuizStyle.css'
export default function QuizPage() {
    const questions = [
        {
            question: "What is react?",
            options: ['CSS Framework', "React Library", "React Framework", "Testing Tool"],
            answer: 'React Library'
        },
        {
            question: "What is Node.js?",
            options: ['JavaScript Runtime', 'CSS Framework', 'React Component', 'Testing Tool'],
            answer: 'JavaScript Runtime'


        },
        {
            question: "What is Bootstrap?",
            options: ['CSS Framework', 'JavaScript Library', 'Database', 'IDE'],
            answer: 'CSS Framework'

        },
        {
            question: "What is Django?",
            options: ['Web Framework', 'JavaScript Library', 'React Component', 'Testing Tool'],
            answer: 'Web Framework'
        },
        {
            question: "What is MongoDB?",
            options: ['Database', 'CSS Framework', 'JavaScript Library', 'IDE'],
            answer: 'Database'
        },
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswer, setcurrentAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const handleClick = (option) => {
        setcurrentAnswer(option)
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }
    }
    const handlenextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setcurrentAnswer(null)

    }




    return (
        <div>
            {currentQuestionIndex < questions.length ?
                <div><QuestionList question={questions[currentQuestionIndex].question}
                    optionChoice={questions[currentQuestionIndex].options}
                    handleClick={handleClick}
                    currentAnswer={currentAnswer} />

                    <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'}
                        onClick={handlenextQuestion}
                    >Next Question </button></div> : <div className='score'>Your score is {score}</div>}


        </div>

    )
}
