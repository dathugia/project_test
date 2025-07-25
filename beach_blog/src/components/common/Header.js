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
          <Navbar.Brand href="#">Beach Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-between align-items-center">
            <Nav className="gap-4">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              
              <NavDropdown title="Regions" id="nav-regions-dropdown">
                <NavDropdown.Item as={Link} to="/regions/north">Northern Beaches</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/regions/south">Southern Beaches</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/regions/east">Eastern Beaches</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/regions/west">Western Beaches</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              {/* <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
              <Nav.Link as={Link} to="/queries">Queries</Nav.Link>
              <Nav.Link as={Link} to="/sitemap">Sitemap</Nav.Link> */}
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
              &nbsp;visitors
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
