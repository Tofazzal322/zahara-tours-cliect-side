import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';

const TrendingTours = () => {
     const { data } = useData();
    return (
        <div className="container mb-5">
      <h1 className="bookAppointmentBtn pb-4"> TRENDING TOURS</h1>
      <Row>
        {data
          .filter((item) => "TRENDING-TOURS" === item.categories)
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
                  <Card.Text>{item.duration}</Card.Text>
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

export default TrendingTours;