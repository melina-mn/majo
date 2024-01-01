import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

  let [index,setIndex1] = useState(0);
  let [question,setQuestion] = useState(data[index]);

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <div className="box">
        <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        </ul>
        <ul>
        <li>{question.option3}</li>
        <li>{question.option4}</li> 
        </ul>
      </div> 
      <button>Next</button>
      <div className="index">1 of 3</div>
    </div>
  )
}

export default Quiz