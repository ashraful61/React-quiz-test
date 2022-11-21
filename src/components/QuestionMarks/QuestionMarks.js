import React from 'react';
import './QuestionMarks.css';

const QuestionMarks = ({wrightAns, wrongAns}) => {
    return (
        <div className='question-marks'>
          <div className='py-5'>
            <p className='text-success'>
                <strong>Wright Ans: {wrightAns}</strong>
            </p>
            <p className='text-danger'>
                <strong>Wrong Ans: {wrongAns}</strong>
            </p>
          </div>
        </div>
    );
};

export default QuestionMarks;