import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";

const AdventureTours = () => {
  const { data } = useData();
  // console.log(data);
  return (
    <div className="p-5 adventure-bg">
      <h1 className="text-center bookingBtn"> ADVENTURE TOURS</h1>
           <Row className="mb-5">
        {data
          .filter((item) => "ADVENTURE-TOURS" === item.categories)
          .map((item) => (
            <Col key={item.id} className="mt-5" md={4} lg={3} xs={12}>
              <Card>
                <Card.Img
                  className="item-img"
                  variant="top"
                  src={item.img}
                />
                <Card.Body className="item-cart-bg">
                  <Card.Title className="all-title">{item.title}</Card.Title>
                  <Card.Text  className="duration">
                    {item.duration} <span className="price"> {item.price}</span> 
                  </Card.Text>
                  <Card.Text>{item.day}</Card.Text>
                  <Link to={`/booking2/${item._id}`}>
                    <Button className="bookingBtn" variant="primary">View Full Package</Button>
                  </Link>
                  <Link to={`/booking/${item._id}`}>
                    <Button className="bookingBtn  mt-3" variant="primary">Book This Package</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default AdventureTours;
