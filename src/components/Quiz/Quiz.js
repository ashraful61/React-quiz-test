import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  const { logo, name, total } = quiz;
  return (
    <div className="quiz">
      <Col>
        <Card>
          <Card.Img className="bg-light" variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <small> Questions: {total} </small> <br/>
             <Button className="mt-2" variant="info">Start Test</Button>{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Quiz;
