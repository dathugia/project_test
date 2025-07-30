import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import "./Header.css"; // Import your CSS for styling
import { Link } from "react-router-dom";


const Header = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Lấy số từ localStorage
    let count = parseInt(localStorage.getItem("visitorCount") || "0", 10);
    count += 1; // Tăng thêm 1
    localStorage.setItem("visitorCount", count); // Lưu lại
    setVisitorCount(count); // Cập nhật UI
  }, []);

  return (
    <header className="main-header fixed-top">
      <Navbar expand="lg" variant="dark" className="navbar">
        <Container className="justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img
              src="./images/logo.png"
              alt="Beach Blog Logo"
              height="40"
              className="d-inline-block align-top me-2"
            />{' '}
            Beach Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="align-items-center">
            <Nav className="mx-auto gap-4 p-2">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Beaches" id="nav-explore-dropdown">
                <NavDropdown.Item as={Link} to="/regions">Regions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
              <Nav.Link as={Link} to="/tips">Tips</Nav.Link>
              {/* <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> */}
            </Nav>

            {/* Khối đếm số lượt truy cập */}
            <div
              className="visitor-count d-flex align-items-center px-3 py-1 rounded-pill text-white"
              style={{ backgroundColor: "#2d95c5" }}
            >
              <FaUser className="me-2" />
              <span style={{ fontWeight: "bold" }}>
                {visitorCount.toLocaleString()}
              </span>{" "}
              &nbsp;
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
