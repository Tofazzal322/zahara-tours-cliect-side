import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          alert(" Are you sure want to delete the items?");
          const remaining = manageTours?.filter((booked) => booked._id !== id);
          setManageTours(remaining);

          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };


  // /////////////////////////////////////

  return (
    <div>
      <h2 className="text-center mt-2 mb-3"> MANAGE ALL BOOKING</h2>
      <h3 className="text-center">
        TOTAL ITEMS: -{" "}
        <span className="text-danger fs-1 fw-bold"> {manageTours.length}</span>
      </h3>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Package</th>
          <th>Mobile</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      </Table>
      
      {manageTours.map((booking,index) => (
        <Table striped bordered hover responsive>
          
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{booking.title}</td>
              <td>{booking.mobile}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td className="action-td">
                
                <Link to={`/updateBooking/${booking._id}`}>
              <Button
                className="btn me-1 btn-dark fw-bold text-light"
              >
                Update
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(booking._id)}
              className="btn btn-warning fw-bold text-dark"
            >
              {" "}
              Delete
            </Button>
              </td>
            </tr>
          </tbody>

        </Table>
      ))}
    </div>
  );
};

export default ManageTours;

