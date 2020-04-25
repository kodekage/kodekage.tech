import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

export default class Navigator extends React.Component {
  state = {
    bg: {
      background: 'rgba(18, 46, 187, 0.99)',
      boxShadow: '0 0 5px 1px rgba(2,2,2,0.9)'
    }
  }

  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 2000,
      delay: 0,
      distance: '100px',
      scale: 1,
      easing: 'ease',
      reset: true
    };

    ScrollReveal().reveal(this.refs.box1, config);
  }

  render() {
    const navStyle = {
      linkFont: {
        fontSize: '20px'
      },
      headingFont: {
        fontSize: '35px',
        color: '#fff',
        margin: '0',
        fontWeight: '0'
      }
    }
    
    return(
      <>
        <Navbar collapseOnSelect style={this.state.bg} expand="lg" variant="dark" fixed="top">
          <Link to="/">
            <Navbar.Brand ref="box1" style={navStyle.headingFont}>
              kode<span style={{color: 'orange', fontWeight: '900'}}>kage</span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={navStyle.linkFont}>
              <Nav.Link ref="box2">
                <Link to="/about">About</Link>
              </Nav.Link>
              
              <Nav.Link ref="box3">
                <Link to="/about#jobexperience">Experience</Link>
              </Nav.Link>

              <Nav.Link ref="box4">
                <Link to="/about#projects">Projects</Link>
              </Nav.Link>

              <Nav.Link ref="box5">
                <Link to="/community">Community</Link>
              </Nav.Link>

              <Nav.Link ref="box6">
                <Link to="/community#talks">Talks</Link>
              </Nav.Link>

              <Nav.Link ref="box7">
                <a href="mailto:oparaprosper79@gmail.com">Contact</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}