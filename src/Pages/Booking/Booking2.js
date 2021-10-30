import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
// import Packages from "../Packages/Packages";

const Booking2 = () => {
  const [status, setStatus] = useState(false);
  const { bookId2 } = useParams();
  const [packages, setPackages] = useState({});
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  // /////// Specific items Api//////////////
  useEffect(() => {
    const url = `https://damp-castle-34013.herokuapp.com/packages/${bookId2}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [bookId2]);
  console.log(packages);
  /////////////////////////////////////////////////////////////

  // ////////////// Booking submit //////////////////////////////
  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://damp-castle-34013.herokuapp.com/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(!status);
        alert("Successfully Booked Your Order");
        reset();
      })
      .catch((err) => console.log(err));
  };
  // /////////////////////////////////////////////

  return (
    <div className="px-3 container">
      <h2 className="text-center mt-2 text-danger">This is Booking 2 page</h2>
      <Row className="mt-5 ">
        <Col className="pe-5" xs={12} md={6}>
          <Image className="w-100" src={packages.img} alt="" />
          <h2>{packages.title}</h2>
          <h4> {packages.price} </h4>
          <h5> {packages.duration} </h5>
          <p> {packages.description} </p>
        </Col>

        <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mt-2 price-header">
              <p>
                {" "}
                Starts From :{" "}
                <span className="fs-4 text-warning fw-bold">
                  {packages.price}
                </span>
              </p>
            </div>
            <h3 className="mt-2 text-center ">
              <span className="categories">{packages.categories}</span>{" "}
              <span className="">BOOKING</span>{" "}
            </h3>

            <Row className="mb-3">
              <Col>
                <h5>Package Name *</h5>
                <input
                  type="text"
                  onBlur
                  className="w-100 h-75"
                  value={packages.title}
                  {...register("title")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Email *</h5>
                <input
                  className="w-100 h-75"
                  // placeholder="Enter Your Email"
                  value={user?.email}
                  {...register("email")}
                />
              </Col>
              <Col>
                <h5>Name *</h5>
                <input
                  className="w-100 h-75"
                  // placeholder="Name"
                  value={user?.displayName}
                  {...register("name")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Key *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  value={packages.key}
                  {...register("key")}
                />
              </Col>
              <Col>
                <h5>Nationality *</h5>
                <input
                  className="w-100 h-75"
                  placeholder="Nationality"
                  {...register("nationality")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Date *</h5>
                <input
                  type="date"
                  placeholder="Date"
                  className="w-100 h-75"
                  {...register("date")}
                />
              </Col>
              <Col>
                <h5>Mobile *</h5>
                <input
                  type="number"
                  placeholder="Mobile"
                  className="w-100 h-75"
                  {...register("mobile")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Your Message</h5>
                <textarea
                  className="w-100 h-100"
                  placeholder="Your Massage"
                  {...register("message")}
                />
              </Col>
            </Row>

            <input className="mt-5 bookingBtn w-100" type="submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Booking2;
