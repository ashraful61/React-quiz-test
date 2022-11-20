import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  const { logo, name } = quiz;
  return (
    <div className="quiz">
      <Col>
        <Card>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Quiz;
