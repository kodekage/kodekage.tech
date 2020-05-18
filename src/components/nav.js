import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

export default props => {
  const navStyle = {
    linkFont: {
      fontSize: "16px",
      color: "#fff",
    },
    headingFont: {
      fontSize: "25px",
      color: "#fff",
      margin: "0",
      fontWeight: "600",
    },
    bg: {
      background: "rgba(0,23,177,0.9)",
      width: "100%",
      borderBottom: "1px solid rgba(225, 225, 225, 0.5)",
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
          <Navbar.Brand style={navStyle.headingFont}>kodekage</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#jobexperience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#community"
            >
              Community
            </Nav.Link>
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#talks"
            >
              Talks
            </Nav.Link>
            <Nav.Link
              style={navStyle.linkFont}
              className="nav-link"
              href="/#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
