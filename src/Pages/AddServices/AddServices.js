import React, { useState,useLocation,useHistory } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState(false);

  // const location = useLocation();
  // const history = useHistory();
  // const redirect_uri = location.state?.from || "/packages";

  const onSubmit = (data) => {

    fetch("https://damp-castle-34013.herokuapp.com/packages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(!status);
        alert(" Successfully added your New tours ");
        reset();
        // history.push(redirect_uri);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className=" addService-container  mb-5 pb-5" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center text-warning fw-bold fs-1 mb-2 mt-2">ADD NEW TOURS & PACKAGES</h2>
      <Row className="mb-3">
        <Col>
          <h5>Location *</h5>
          <input
            className="w-100 h-75"
            placeholder={"Enter Location Of Tours"}
            {...register("location")}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h5 >Title *</h5>
          <input
            className="w-100 h-75"
            placeholder="Enter Name of Package"
            {...register("title")}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h5>Duration *</h5>
          <select className="  w-100 h-50" {...register("duration")}>
            <option value="5 Hours">5 Hours</option>
            <option value="2 Days 1 Night">2 Days 1 Night</option>
            <option value="11 Hours">11 Hours</option>
          </select>
        </Col>
        <Col>
          <h5>Categories *</h5>
          <select className="  w-100 h-50" {...register("categories")}>
            <option value="POPULAR-TOURS">POPULAR-TOURS</option>
            <option value="ADVENTURE-TOURS">ADVENTURE-TOURS</option>
            <option value="TRENDING-TOURS">TRENDING-TOURS</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Price *</h5>
          <input
            type="number"
            placeholder="Enter Package Price"
            className="w-100 h-50"
            {...register("price")}
          />
        </Col>
       <Col>
          <h5>Unique ID *</h5>
          <input
            type="number"
            placeholder="Enter Unique Id"
            className="w-100 h-50"
            {...register("id")}
          />
        </Col>
        <Col>
          <h5>Unique Key *</h5>
          <input
            placeholder="Unique Key Ex. ( ETA6545TH ) "
            className="w-100 h-50"
            {...register("key")}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Day *</h5>
          <select className="  w-100 h-50" {...register("day")}>
            <option value="Available on all days">Available on all days</option>
            <option value="Saturday and Tuesday">Saturday and Tuesday</option>
            <option value="Monday and Friday">Monday and Friday</option>
          </select>
        </Col>
        <Col>
          <h5>Img Url *</h5>
          <input
            className="w-100 h-50"
            placeholder={"Enter Image Url"}
            {...register("img")}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h5>Description</h5>
          <textarea
            className="w-100 h-75"
            placeholder="Add Description"
            {...register("description")}
          />
        </Col>
      </Row>

      <input
        className="mt-4 w-100  fs-4 fw-bold text-dark btn btn-warning"
        type="submit"
      />
    </form>
  );
};

export default AddServices;
