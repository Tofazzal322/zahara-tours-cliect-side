import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const MenuBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="menu-bg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link className="nav-brand text-light" to="/home">
              Zahara Tours
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/home#banner"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/home#Services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/Packages"
            >
              Packages
            </Nav.Link>
            {/* <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/AdventureTours"
            >
              Adventure Tours
            </Nav.Link> */}

            {/* <Nav.Link as={HashLink} className="nav-items text-light" to="/Booking">
                  Booking
              </Nav.Link> */}
            {/* <Nav.Link> */}
            {/* <HashLink className="nav-items" to="/home#doctors"> Doctors </HashLink>
                <HashLink className="nav-items text-light " to="/signUp">
                  {" "}
                  Sign up{" "}
                </HashLink>
              </Nav.Link> */}

            <Nav.Link>
              {user?.email ? (
                <div className="d-flex">
                  {/* <Nav.Link
                    as={HashLink}
                    className="nav-items text-light"
                    to="/myTours"
                  >
                    My Booking
                  </Nav.Link> */}
                  <Nav.Link
                    as={HashLink}
                    className="nav-items text-light"
                    to="/dashboard#manage"
                  >
                    Dashboard
                  </Nav.Link>
                  {/* <Nav.Link
                    as={HashLink}
                    className="nav-items text-light"
                    to="/AddServices"
                  >
                    Add Tours
                  </Nav.Link> */}
                  <Button
                    className=" btn btn-dark "
                    onClick={logOut}
                    variant="button"
                  >
                    Logout
                  </Button>
                  <Navbar.Text className="ms-3">
                    {/* Signed in as: <a href="#login"> {user?.displayName} </a> */}
                    Mr .
                    <Link className="ps-2" to="/home">
                      {user?.displayName}
                    </Link>
                  </Navbar.Text>
                </div>
              ) : (
                <Button className=" btn btn-dark" variant="button ">
                  {" "}
                  <Link className="nav-items-btn text-light" to="/login">
                    Login
                  </Link>
                </Button>
              )}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
