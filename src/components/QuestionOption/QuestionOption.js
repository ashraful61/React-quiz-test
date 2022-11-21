import React from 'react';
import { Col } from 'react-bootstrap';

const QuestionOption = ({option, index, handleAnswer}) => {
    return (
        <Col>
           <div className="form-check">
                <input onClick={() =>handleAnswer(option)} className="form-check-input" type="radio" name="flexRadioDefault" id={index}/>
                <label className="form-check-label" htmlFor={index}>
                   {option}
                </label>
            </div>
        </Col>
  );
}

export default QuestionOption;