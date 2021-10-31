import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";


const Service = () => {
  const { data } = useData();
  return (
    <div id="Services" className="container mt-5 mb-5">
      <h1 className="mt-5 services-title text-center">SERVICES </h1>

      <Row className="">
        {data.slice(0, 6)?.map((item) => (
          <Col key={item.id} className="mt-5 service-card " md={4} lg={3} xs={12}>
            <Card className="mb-3">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="services-title">{item.title}</Card.Title>
                <Card.Text>{item.description.slice(0, 50)}</Card.Text>
                <Link to={`/booking2/${item._id}`}>
                  <Button
                    cursor="pointer"
                    className=" readMore-btn  "
                    variant="outline-dark"
                  >
                    Book This Package
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

export default Service;
