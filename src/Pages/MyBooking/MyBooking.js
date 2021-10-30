import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Row,} from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const MyBooking = () => {
  const { user } = useFirebase();
  //   console.log(user.email);
  const [myBooking, setMyBooking] = useState([]);

  //  Booking option
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user.email]);

  //   console.log(myBooking);

  // Delete option
  const handleDelete = (id) => {
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deleteCount === 1) {
          const remaining = myBooking.filter((booking) => booking._id !== id);
          setMyBooking(remaining);
          alert("Successfully deleted one document.");
        } 
      });
  };

  return (
    <div id="manage mt-5">
      <h2 className="text-center mt-2 mb-3 mt-2">
        {" "}
        MANAGE MY TOURS & PACKAGES{" "}
      </h2>
      <h3 className="text-center">
        TOTAL ITEMS: -{" "}
        <span className="text-danger fs-1 fw-bold">{myBooking.length}</span>
      </h3>

      {myBooking.map((booking) => (
        <Row className="py-2 bg-primary my-2 text-light">
          <Col>{booking.title}</Col>
          <Col>{booking.email}</Col>
          <Col> {booking.mobile}</Col>
          <Col> {booking.name}</Col>
          <Col>
            <Button
              onClick={() => handleDelete(booking._id)}
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

export default MyBooking;
