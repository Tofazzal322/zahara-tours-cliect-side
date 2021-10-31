import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
// import Doctors from "../Doctors/Doctors";
// import "./Service.css";

const Services = () => {
  const { data } = useData();
  // console.log(data);
  return (
    <div id="Services" className="container mt-2 mb-5">
      <div className="bookAppointmentBtn pb-4">
        <h1>Our Services </h1>
      </div>
      <div className="mt-5 mb-5 ">
        {data
          ?.filter((item) => "POPULAR-TOURS" === item.categories)
          .map((item) => (
            <Row id="Services" key={item.id} className="bg-light mt-5 p-3">
              <Col xs={12} md={6}>
                <div className="col-md-5 me-4">
                  <Image className="service-img" src={item.img} alt="" />
                </div>
              </Col>

              <Col className="mb-5" xs={12} md={6}>
                <div className="services-text">
                  <h3 className="mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <Link to={`/serviceDetails/${item.id}`}>
                    <Button className="bookingBtn" variant="primary">
                      Service Details
                    </Button>
                  </Link>
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
                </div>
              </Col>
            </Row>
          ))}
      </div>
      {/* <Doctors></Doctors> */}
    </div>
  );
};

export default Services;
