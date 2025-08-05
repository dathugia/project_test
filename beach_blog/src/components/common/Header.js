import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   

    // Bắt sự kiện scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="main-header fixed-top">
      <Navbar
        expand="lg"
        variant="dark"
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Container className="justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img
              src="./images/logo.png"
              alt="Beach Blog Logo"
              height="40"
              className="d-inline-block align-top me-2"
            />{" "}
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
            </Nav>

            <div
              className="visitor-count d-flex align-items-center px-3 py-1 rounded-pill text-white"
              style={{ backgroundColor: "#2d95c5" }}
            >
              <span style={{ fontWeight: "bold" }}>1234
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
