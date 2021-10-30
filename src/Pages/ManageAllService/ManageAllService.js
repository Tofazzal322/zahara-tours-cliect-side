import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ManageAllService = () => {
const [managePackages, setManagePackages] = useState([]);
  // const [data, setData] = useState([]);
  console.log(managePackages);

  useEffect(() => {
    // fetch('/data.json')
    fetch("https://damp-castle-34013.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          
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
          const remaining = managePackages?.filter((packages) => packages._id !== id);
         setManagePackages(remaining);
          
          alert("Successfully deleted one document.");
        }
        // else {
        //   alert("No documents matched the query. Deleted 0 documents.");
        // }
      });
  };
  return (
    <div>
      <h2 className="text-center text-danger fw-bold mt-2 mb-3"> MANAGE ALL Packages & PACKAGES </h2>
      <h3 className="text-center">
        TOTAL ITEMS: -{" "}
        <span className="text-danger fs-1 fw-bold"> {managePackages.length}</span>
      </h3>

      {managePackages.map((packages) => (
        <Row className="py-2 bg-primary my-2 text-light">
          <Col>{packages.key}</Col>
          <Col>{packages.categories}</Col>
          <Col> {packages.price}</Col>
          <Col> {packages.location}</Col>
          <Col>
            <Button
              onClick={() => handleDelete(packages._id)}
              className="btn btn-warning fw-bold text-dark"
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
