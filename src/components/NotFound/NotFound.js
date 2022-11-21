import React from "react";
import { Button } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="d-flex h-100 justify-content-center align-items-center position-absolute"
      style={{ left: "2%", right: "2%" }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          404, <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'>
        <Button variant="primary">Back To Home</Button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
