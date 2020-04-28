import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

export default (props) => {
  const navStyle = {
      linkFont: {
        fontSize: "17px",
      },
      headingFont: {
        fontSize: "25px",
        color: "#fff",
        margin: "0",
        fontWeight: "0",
      },
      bg: {
        background: "#333",
        boxShadow: "0 0 5px 1px rgba(2,2,2,0.9)",
      },
    }

  return (
      <>
        <Navbar
          collapseOnSelect
          style={navStyle.bg}
          expand="lg"
          variant="dark"
          fixed="top"
        >
          <Link to="/">
            <Navbar.Brand style={navStyle.headingFont}>
              kode
              <span style={{ color: "orange", fontWeight: "900" }}>
                {props.short_name}
              </span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={navStyle.linkFont}>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/about#jobexperience">Experience</Link>
              <Link className="nav-link" to="/about#projects">Projects</Link>
              <Link className="nav-link" to="/community">Community</Link>
              <Link className="nav-link" to="/community#talks">Talks</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
}
