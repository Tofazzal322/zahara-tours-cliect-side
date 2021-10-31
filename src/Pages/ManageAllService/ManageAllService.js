import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageAllService = () => {
  const [managePackages, setManagePackages] = useState([]);

  useEffect(() => {
    fetch("https://damp-castle-34013.herokuapp.com/packages/")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>;
        } else {
          setManagePackages(data);
        }
      });
  }, []);

  // /////////////////////////
  const handleDelete = (id) => {
    const url = `https://damp-castle-34013.herokuapp.com/packages/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount !== 1) {
          alert("Are You Sure, Want To Delete This Package?");
          const remaining = managePackages?.filter(
            (packages) => packages._id !== id
          );
          setManagePackages(remaining);

          alert("Successfully deleted one document.");
        }
        // else {
        //   alert("No documents matched the query. Deleted 0 documents.");
        // }
      });
  };



  return (
    <div className="me-3 rounded mb-5">
      <h2 className="text-center text-danger fw-bold mt-2 mb-3">
        {" "}
        MANAGE ALL TOURS & PACKAGES{" "}
      </h2>
      <h3 className="text-center">
        TOTAL ITEMS: -{" "}
        <span className="text-danger fs-1 fw-bold">
          {" "}
          {managePackages.length}
        </span>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Package </th>
            <th>Package Key</th>
            <th>Package Price</th>
            <th>Package Location</th>
            <th>User Action</th>
          </tr>
        </thead>
      </Table>

      {managePackages.map((packages) => (
        <Row key={packages.key} className="py-2 manage-all rounded fw-bold mb-3  text-center py-4 my-2 text-light">
          <Col>{packages.title}</Col>
          <Col>{packages.key}</Col>
          <Col> {packages.price}</Col>
          <Col> {packages.location}</Col>
          <Col>
            <Link to={`/updatePackages/${packages._id}`}>
               <Button
              // onClick={() => handleDelete(packages._id)}
              className="btn btn-outline-warning fw-bold me-2 text-light"
            >
              Update
            </Button>
           </Link>
            <Button
              onClick={() => handleDelete(packages._id)}
              className="btn btn-outline-danger text-light fw-bold "
            >
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ManageAllService;
