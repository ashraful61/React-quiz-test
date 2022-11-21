import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizDetail = () => {
  const quizDetails = useLoaderData();
  const { name, questions } = quizDetails?.data;
  return (
    <div className="container">
      <h1 className="mt-4">Questions of {name}</h1>
      <Row xs={1} md={1} lg={1} className="g-4">
        {questions.map((question, index) => (
          <Question
            index={index}
            key={question.id}
            questionProps={question}
          ></Question>
        ))}
      </Row>
    </div>
  );
};

export default QuizDetail;
