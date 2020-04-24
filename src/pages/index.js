import React from "react"
import { Link } from "gatsby"
import ScrollReveal from 'scrollreveal';

import Layout from "../components/layout"
import '../styles/index.css'

class IndexPage extends React.Component {
  componentDidMount = () => {
    const config1 = {
      origin: 'right',
      duration: 2000,
      delay: 0,
      distance: '100px',
      scale: 1,
      easing: 'ease',
      reset: true
    };
    const config2 = {
      origin: 'right',
      duration: 2500,
      delay: 1000,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true
    };
    const config3 = {
      origin: 'right',
      duration: 2500,
      delay: 2000,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true
    };
    const config4 = {
      origin: 'right',
      duration: 2500,
      delay: 3000,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true
    };
    

    ScrollReveal().reveal(this.refs.box1, config1);
    ScrollReveal().reveal(this.refs.box2, config2)
    ScrollReveal().reveal(this.refs.box3, config3)
    ScrollReveal().reveal(this.refs.box4, config4)
  }

  componentWillUnmount = () => {
    ScrollReveal().clean(this.refs.box1);
  } 

  render() {
    return (
      <Layout>
        <header className="App-header">
          <div className="invisible-div">hello</div>
            <div className="bg-img">
              <h1 ref="box1">
                Prosper Opara
              </h1>

              <div>
                <h2>
                  <Link to="/about#projects" ref="box2">
                    <span>Fullstack Engineer</span> |
                  </Link>
                  <a href="https://dev.to/kodekage" ref="box3">
                    Technical Writer |
                  </a>
                  <Link to="/community" ref="box4">
                    <span>Developer Community Volunteer</span>
                  </Link>
                </h2>
              </div>
          </div>
        </header>
      </Layout>
    )
  }
}

export default IndexPage
