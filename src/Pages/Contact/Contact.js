import React from 'react';
import { Col, Image, Row } from "react-bootstrap";
// import useData from '../../hooks/useData';

const Contact = () => {
    // const {data}=useData()
  return (
    <div className="container mt-5 mb-5">
      <h3>CONTACT WITH US</h3>
      <hr className="w-25" />
      <Row className=" mt-5 contact-section">
        <Col>
          <h3>ZAHARA TOURS & TRAVELS</h3>
          <Col className="mt-3">
            <h4 className="text-left mb-3">Address</h4>
            <p>
              PO Box 719, PC114, Opp. OK Centre, Ruwi, Muscat, Sultanate of Oman
            </p>
            <h4>For Tours & General Enquiries</h4>
            <p>+968 2477 0800 / +968 9099 9335</p>
            <h4>Email</h4>
            <p>info@zaharatours.om</p>
          </Col>
              </Col>
              <Col>
                  <Image className="w-100 mb-2" src="https://www.zaharatours.com/public/uploads/about_us/about-holiday.jpg" alt="" />
              </Col>
      </Row>
    </div>
  );
};

export default Contact;