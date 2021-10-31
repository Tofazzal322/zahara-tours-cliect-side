import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { useParams } from "react-router";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useData from "../../hooks/useData";

const Booking = () => {
  const { user } = useAuth();
  const { data } = useData();
  const { bookId } = useParams();
  // const {data, setData}   = useState({});
  // const { id } = useParams();
  const [status, setStatus] = useState(false);
  // console.log(data);
  const { register, handleSubmit, reset } = useForm();

  // useEffect(() => {
  //   const url = `http://localhost:5000/data/${bookId}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

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

  return (
    <div className="px-3 container">
      <Row className="mt-5">
        <Col className="pe-5" xs={12} md={6}>
          {/* <Image className="w-100" src={data.img}  alt="" />
          <h2>{data.title}</h2>
          <h4> {data.price} </h4>
          <h5> {data.duration} </h5>
          <p> {data.description} </p> */}
        </Col>
        <Col className=" booking-form px-3 mb-5" xs={12} md={6}>
          {/* <p> Schedule your date to tours</p> */}
          {data
            ?.filter((item) => bookId === item._id)
            .map((newItem) => (
              <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mt-2 price-header">
                  <p>
                    {" "}
                    Starts From :{" "}
                    <span className="fs-4 text-warning fw-bold">
                      {newItem.price}
                    </span>
                  </p>
                </div>
                <h3 className="mt-2 text-center ">
                  {newItem.categories} BOOKING{" "}
                </h3>

                <Row className="mb-3">
                  <Col>
                    <h5>Package Name *</h5>
                    <input
                      className="w-100 h-75"
                      value={newItem.title}
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
                      className="w-100 h-75"
                      value={newItem.key}
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

                <input className="mt-5 bookingBtn w-25" type="submit" />
              </form>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
