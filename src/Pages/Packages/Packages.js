import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";

const Packages = () => {
  const { data } = useData();
  console.log(data);
  return (
    <div className="container">
      <h1> All Packages display here</h1>
      <Row xs={1} md={4}>
        {data?.map((item) => (
          <Col className="mt-4">
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
               <Link to={`/booking2/${item._id}`}>
                    <Button className="bookingBtn mt-3" variant="primary">
                      Book The Package
                    </Button>
                  </Link>
               <Link to={`/booking/${item._id}`}>
                    <Button className="bookingBtn mt-3" variant="primary">
                      Book The Package
                    </Button>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Packages;
