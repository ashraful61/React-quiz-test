import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import QuestionOption from "../QuestionOption/QuestionOption";
import "./Question.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";


const Question = ({ questionProps, index }) => {
  const { question, options, correctAnswer } = questionProps;

  const seeCorrectAnswer = () => {
    Swal.fire({
      icon: "info",
      title: "Correct answer",
      text: correctAnswer,
    });
  };

  const handleAnswer = (selectedOption) => {
     if(selectedOption === correctAnswer ) {
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: 'Your selected answer is correct',
      });
      return
     }
     else {
      Swal.fire({
        icon: "error",
        title: "Ops!",
        text: 'Your selected answer is wrong',
      });
      return
     }
  }
  
  return (
    <Col>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="question-container d-flex mb-3 fw-bold justify-content-between">
          <div className="d-flex">
            <div className="question-no">Question {index + 1}:</div>
            <div>{question}</div>
          </div>
          <FontAwesomeIcon
            onClick={seeCorrectAnswer}
            className="eye-icon"
            icon={faEye}
          />
     
        </div>
        <div className="options-container">
          <Row xs={1} md={1} lg={1} className="g-4">
            {options.map((option, idx) => (
              <QuestionOption
                index={index}
                key={idx}
                option={option}
                handleAnswer={handleAnswer}
              ></QuestionOption>
            ))}
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Question;
