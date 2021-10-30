import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import aboutImg from "../../Images/banner6.jpg"

const About = () => {
  return (
    <Row className="about-main p-5">
      <Col xs={12} md={6}>
        <div className=" text-dark ">
          <h2>ABOUT US</h2>
          <p>
            Zahara Tours is the pioneer in Travel and Tourism business in Oman.
            Since its modest beginning in 1971, Zahara Tours has developed in to
            a prominent service organization recognized by IATA, SITE, and ASTA.
            We specialize in F.I.Ts, Groups, Conferences, Charters, Incentives,
            Special interest groups, Cruises and Adventure Tours. It enjoys a
            very high reputation for professionally efficient service employing
            multilingual tour guides with a Fleet of deluxe air-conditioned
            luxury Vehicles.
          </p>
          <Button className="bookingBtn  w-25 rounded py-2"> Read More </Button>
          <hr className="horizontal-row" />
        </div>
      </Col>
      <Col xs={12} md={6}>
        <Image className="w-100 h-100 m-0" src={aboutImg}/> 
      </Col>
    </Row>
  );
};

export default About;
