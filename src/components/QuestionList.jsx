import React from 'react'
import QuizStyle from './QuizStyle.css'

export default function QuestionList({ question, optionChoice, handleClick, currentAnswer }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {optionChoice.map((option, index) => (
                    <li key={index} onClick={() => handleClick(option)} className={currentAnswer ===
                        option ? 'selected' : ''}>{option}</li>
                ))}
            </ul>
        </div>
    )
}
