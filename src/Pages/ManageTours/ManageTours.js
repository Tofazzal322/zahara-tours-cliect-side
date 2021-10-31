import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col,Row } from "react-bootstrap";

//////////////////////////////////////////////////
const ManageTours = () => {
  const [manageTours, setManageTours] = useState([]);

  useEffect(() => {
    fetch("https://damp-castle-34013.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setManageTours(data));
  }, [manageTours]);

  /////////////// /////////////////////////////////
  const handleDelete = (id) => {
    const url = `https://damp-castle-34013.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount !== 1) {
          const remaining = manageTours?.filter((booked) => booked._id !== id);
          setManageTours(remaining);

          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };

  ///////////////////////////////////

  const handleUpdate = (id) => {
    const url = `https://damp-castle-34013.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(manageTours),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Successfully Update one document.");
          setManageTours({});
        } else {
          alert("No documents matched the query. Update 0 documents.");
        }
      });
    console.log("object");
  };

  // /////////////////////////////////////

  return (
    <div>
      <h2 className="text-center mt-2 mb-3"> MANAGE ALL BOOKING</h2>
      <h3 className="text-center">
        TOTAL ITEMS: -{" "}
        <span className="text-danger fs-1 fw-bold"> {manageTours.length}</span>
      </h3>

      {manageTours.map((booking) => (
        <Row className="py-2 bg-primary my-2 text-light">
          <Col>{booking.title}</Col>
          <Col>{booking.email}</Col>
          <Col> {booking.mobile}</Col>
          <Col> {booking.name}</Col>
          <Col>
            <Button
              onClick={() => handleDelete(booking._id)}
              className="btn me-1 btn-dark fw-bold text-light"
            >
              {" "}
              Update
            </Button>
            <Button
              onClick={() => handleUpdate(booking._id)}
              className="btn btn-warning fw-bold text-dark"
            >
              {" "}
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ManageTours;
