import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { user } = useFirebase();


  //  //////////Booking option //////////////////////

  useEffect(() => {
    fetch(`https://damp-castle-34013.herokuapp.com/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user?.email]);



  // /////////////Delete option////////////////

  const handleDelete = (id) => {
    const url = `https://damp-castle-34013.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deleteCount !== 1) {
          alert(" Are you sure want to delete the items?");
          const remaining = myBooking.filter((booking) => booking._id !== id);
          setMyBooking(remaining);
          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };
/////////////////////////////////////////////////////
  

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
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Package </th>
            <th>Package Key</th>
            <th>User Email</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>

      {myBooking.map((booking) => (
        <Row className="py-2 bg-light  my-2 text-dark">
          <Col>{booking.title}</Col>
          <Col>{booking.key}</Col>
          <Col> {booking.email}</Col>
          <Col> {booking.name}</Col>
          <Col >
            <Link to="/packages">
              <Button className="btn  me-2 btn-warning fw-bold text-dark">
                {" "}
                More
              </Button>
            </Link>

            <Button
              onClick={() => handleDelete(booking._id)}
              className="btn btn-danger  fw-bold "
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
