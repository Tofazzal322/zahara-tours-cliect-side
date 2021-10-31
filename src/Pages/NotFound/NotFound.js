import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className= "container ms-5 mt-2">
      <Row>
        <Col>
          <h1 className="mt-5 "> That page doesn't exist!</h1>
                  <p>Sorry, the page you were looking for could not be found</p>
                  <Link to="/home">
              {" "}
              <button className="goHome-btn mb-5 "> Go Home</button>
            </Link>
        </Col>
        <Col>
          <div className="not-found-body">
            
            <img
              className="w-100 h-50"
              src="https://i.stack.imgur.com/6M513.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
