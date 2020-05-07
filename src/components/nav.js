import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

export default props => {
  const navStyle = {
    linkFont: {
      fontSize: "17px",
      color: "#222",
    },
    headingFont: {
      fontSize: "25px",
      color: "#222",
      margin: "0",
      fontWeight: "600",
    },
    bg: {
      background: "ghostwhite",
      color: "#333",
      width: "100%",
      overflowX: "hidden",
    },
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        style={navStyle.bg}
        expand="lg"
        variant="light"
        fixed="top"
      >
        <Link to="/">
          <Navbar.Brand style={navStyle.headingFont}>
            kodekage
            {/*<span style={{ color: "orange", fontWeight: "900" }}>*/}
            {/*  {props.short_name}*/}
            {/*</span>*/}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link style={navStyle.linkFont} className="nav-link" to="/#about">
              About
            </Link>
            <Link
              style={navStyle.linkFont}
              className="nav-link"
              to="/#jobexperience"
            >
              Experience
            </Link>
            <Link
              style={navStyle.linkFont}
              className="nav-link"
              to="/#projects"
            >
              Projects
            </Link>
            <Link
              style={navStyle.linkFont}
              className="nav-link"
              to="/#community"
            >
              Community
            </Link>
            <Link style={navStyle.linkFont} className="nav-link" to="/#talks">
              Talks
            </Link>
            <Link style={navStyle.linkFont} className="nav-link" to="/#contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
