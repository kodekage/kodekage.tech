import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faDev,
  faLinkedin,
  faReact,
  faNodeJs,
  faJsSquare,
  faGitAlt,
  faLaravel,
  faPhp,
  faLinux,
  faWindows,
  faFigma,
  faJenkins,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons"
// import { faPhp} from '@fortawesome/free-solid-svg-icons'
import ScrollReveal from "scrollreveal"

import Layout from "../components/layout"
import Footer from "../components/footer"
import op from "../images/_DSC0054.jpg"

import "../styles/index.css"
import "../styles/about.css"
import "../styles/community.css"

class IndexPage extends React.Component {
  state = {
    sender: "",
    email: "",
    message: "",
    project: [
      {
        img:
          "https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,h_213,w_400/v1586561686/team_om5ixx.png",
        title: "Teamwork [Client App]",
        about:
          "Teamwork is a social network for employees of an organization built to facilitate more interaction between colleagues and promote team bonding.",
        url: "https://github.com/OPARA-PROSPER/teamwork-client",
      },
      {
        img:
          "https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,w_400/v1586561691/team-api_k92j55.png",
        title: "Teamwork [API]",
        about:
          "This project is a RESTFul API for the teamwork client app. It's built with Nodejs/Expressjs",
        url: "https://github.com/OPARA-PROSPER/teamwork",
      },
      {
        img:
          "https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,w_400/v1586561701/gads_twnpis.png",
        title: "GADSIMO",
        about:
          "Google Africa Developer Scholarship (GADS) community in Imo state community website",
        url: "https://alcimo.herokuapp.com",
      },
      {
        img:
          "https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,w_400/v1588084502/project_z8921h.png",
        title: "Personal Site",
        about: "My personal website",
        url: "/",
      },
    ],
    counter: 0,
    app_counter: 0,
    app_type: ["scalable", "secure", "high performing", "have good UX"],
  }

  encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  handleContactSubmission = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': form.getAttribute('name'),
        name: this.state.sender,
        email: this.state.email,
        message: this.state.message
      }),
    })
      .then(() => alert("Your message was successfully sent"))
      .catch((error) => alert(error))
  }

  handleSenderChange = (e) => {
    this.setState({
      sender: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  updateAppType = () => {
    return setInterval(() => {
      if (this.state.app_counter >= 3) {
        this.setState({
          app_counter: 0,
        })
      } else {
        this.setState({
          app_counter: this.state.app_counter + 1,
        })
      }
    }, 3000)
  }

  projects = []

  componentDidMount = () => {
    const config1 = {
      origin: "right",
      duration: 1000,
      delay: 0,
      distance: "100px",
      scale: 1,
      easing: "ease",
      reset: true,
    }

    ScrollReveal().reveal(this.refs.box1, config1)
    this.updateAppType()
  }

  componentWillUnmount = () => {
    ScrollReveal().clean(this.refs.box1)
    clearInterval(this.updateAppType())
  }

  render() {
    const Project = ({ img, title, url }) => (
      <div
        className="project-item col-lg-5"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="project-detail">
            <a href={url}>
              <h4>{title}</h4>
            </a>
          </div>
        </div>
      </div>
    )

    const Work = ({ url, location, title, company, detail, duration }) => (
      <div className="work row justify-content-center align-items-start no-gutters">
        <div className="work-company col-lg-2 col-md-4 order-lg-0 order-md-1 order-sm-0">
          <h3>{title}</h3>
          <div>{duration}</div>
        </div>

        <div className="work-company col-lg-2 order-lg-2 order-md-0 order-sm-2">
          <h3>{location}</h3>
        </div>

        <div className="work-detail col-lg col-md order-lg-1 order-md-2 col-s order-sm-1">
          <div className="work-title">
            <h3>
              <a href={url}>{company}</a>
            </h3>
          </div>
          {detail}
        </div>
      </div>
    )

    const CommunityDetail = ({
      title,
      duration,
      experience_url,
      community,
    }) => (
      <div className="about-community row justify-content-between">
        <div className="community-item col-lg-4 col-md-4">
          <div style={{ fontSize: "15px" }}>
            <h4>{title}</h4>
            <span>{duration}</span>
          </div>
        </div>

        <div className="community-item-about col-lg col-md">
          <a href={experience_url}>
            <h3>{community}</h3>
          </a>
        </div>

        <div
          className="col-lg-2 col-md"
          style={{ fontSize: "15px", fontWeight: "600" }}
        >
          Owerri, Nigeria
        </div>
      </div>
    )

    const Talk = ({ title, talks, link }) => (
      <div className="talk">
        <div className="talk-detail">
          <a href={link}>
            <h4>{title}</h4>
          </a>
        </div>

        <hr />

        <div className="talk-event">
          <div>
            <h4>Presentations</h4>
            {talks.map((item, index) => (
              <h5 key={index}>
                {item[0]} <i>{item[1]}</i>
              </h5>
            ))}
          </div>
        </div>
      </div>
    )

    return (
      <Layout>
        <header className="App-header">
          <div className="invisible-div">hello</div>
          <div className="img">
            <img src={op} alt="prosper opara" />
          </div>
          <div className="bg-img row align-items-center justify-content-center">
            <h1 ref="box1" className="col">
              Hi, I'm <span>Prosper Opara</span>
              <br />
              I build fullstack web applications
              <br />
              that are{" "}
              <span>{this.state.app_type[this.state.app_counter]}</span>
            </h1>
          </div>
        </header>

        <section
          className="about row justify-content-around no-gutters"
          id="about"
        >
          <div className="col-lg-6">
            <div className="about-section">
              <p className="tdlr">
                TLDR: <span>Fullstack Engineer</span> and
                <span> Technical Writer</span>.
              </p>

              <p>
                I have been coding for over <span>2</span> years with experience
                building fullstack web applications as a freelancer for clients,
                contributing to open source and working on personal projects.
                I'm a <span>stack agnostic developer,</span> as I pretty much
                learn what I need to deliver projects. Nevertheless, I have more
                experience building{" "}
                <span>fullstack Javascript applications</span> (React for FE and
                Node for BE), <span>API's</span> (RESTful and GraphQL),
                persisting data with <span>SQL</span> and <span>NoSQL</span>{" "}
                databases. Recently, I started digging into <span>Docker</span>,{" "}
                <span>K8s</span> and <span>cloud computing</span>.
              </p>

              <p>
                When I am not coding I love to spend my time writing technical
                articles on web technologies and volunteering for developer
                communities. I'm a <span> GitHub Campus Expert</span>{" "}
                (#GithubEducation),{" "}
                <span>Co-lead for the Facebook Developer Circles Owerri</span>{" "}
                (#DevCOwerri) and a <span>Learning Community Ambassador</span>{" "}
                for the Andela Learning Community (#ALCImo)
              </p>

              <p>
                P.S: I love being called <span>kodekage</span> on the internet
                (it's an aliase I adopted after seeing the great ninja war in
                the Naruto anime series which is my favorite).
              </p>
            </div>
          </div>
        </section>

        <section className="job-experience" id="jobexperience">
          {/*<div className="container">*/}
          <h3>Work Experience</h3>
          <hr />

          <Work
            title="Contractor"
            url="/"
            company="Freelancing"
            duration="Jan. 2018 - Present"
            location="Nigeria"
            detail={
              <>
                <p>
                  I build full stack web applications for clients. My stack
                  includes; <span>MERN</span>, <span>PHP/Laravel</span>,
                  Database <span>(Postgresql, MySQL, MongoDB)</span>. Projects I
                  have worked on;
                  {/*<br />*/}
                </p>
                <ul>
                  <li>
                    <a href="https://agrohive.com.ng">Agrohive Website</a>{" "}
                    (First company portfolio website)
                  </li>
                  <li>
                    <a href="https://alcimo.herokuapp.com">GADSIMO</a> (Learning
                    community website GADS 4.0)
                  </li>
                  <li>Assignment Management System</li>
                </ul>
              </>
            }
          />
          <Work
            title="Fullstack Developer"
            url="https://hng.tech"
            company="HNG Internship"
            location="Nigeria, Remote"
            detail={
              <>
                <p>
                  The HNG internship is a 3-month remote internship designed to
                  find and develop the most talented software developers. The
                  intern coders are introduced to complex programming
                  frameworks, and get to work on real world software. During the
                  HNG 6.0 Internship I successfully:
                </p>

                <ul>
                  <li>
                    Consumed the slack API and built a Slack app (bot) that
                    stores conversations in channels.
                  </li>
                  <li>
                    Learnt the agile methodology for software development using
                    pivotal tracker for delivering projects to clients.
                  </li>
                  <li>
                    Deepened my understanding of versioning using Git and GitHub
                    for collaboration.
                  </li>
                  <li>
                    Learnt empathy leading a software engineering team which
                    require more than coding skills.
                  </li>
                  <li>Worked on a php project using the Laravel framework.</li>

                  <strong>Small wins:</strong>
                  <ol>
                    <li>
                      I learnt the architecture of Restful API's and how to
                      build one
                    </li>
                    <li>I got a deeper understanding of Node.js/Express.js</li>
                    <li>I worked with the PHP Laravel framework</li>
                  </ol>

                  <strong>Project GitHub URL:</strong>
                  <ol>
                    <li>
                      <a href="https://github.com/OPARA-PROSPER/Dionysus-Slackbot">
                        {" "}
                        slackbot{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/OPARA-PROSPER/lancers">
                        Lancers
                      </a>
                    </li>
                  </ol>
                </ul>
              </>
            }
            duration="Sept. 2019 - Nov. 2019"
          />
          <Work
            title="Technical Writer"
            url="https://thisdot.co"
            company="ThisDot Media"
            location="USA, remote"
            detail={
              <>
                <p>
                  I was contracted to write detailed articles based on ThisDot
                  Media Yolo brolo series on the company YouTube channel. I
                  delivered two technical articles that were published:
                </p>
                <ol>
                  <li>
                    <a href="https://dev.to/thisdotmedia/yolo-brolo-setting-up-gatsby-and-netlify-1732">
                      Yolo Brolo: setting up gatsby and netlify
                    </a>
                  </li>
                  <li>
                    <a href="https://dev.to/thisdotmedia/yolo-brolo-adding-features-to-your-gatsby-site-21ho">
                      Yolo Brolo: adding features to your gatsby site
                    </a>
                  </li>
                </ol>
              </>
            }
            duration="July 2019 - July 2019"
          />
          {/*</div>*/}
        </section>

        <section className="stack text-center" id="stack">
          <div className="container">
            <h4>Technologies I have worked with</h4>
            <hr />

            <div className="row no-gutters justify-content-center">
              <FontAwesomeIcon color="orange" icon={faJsSquare} />
              <FontAwesomeIcon color="lightgreen" icon={faNodeJs} />
              <FontAwesomeIcon color="skyblue" icon={faReact} />
              <FontAwesomeIcon color="purple" icon={faHtml5} />
              <FontAwesomeIcon color="red" icon={faCss3Alt} />
            </div>
            <div className="row no-gutters justify-content-center">
              <FontAwesomeIcon color="purple" icon={faPhp} />
              <FontAwesomeIcon color="red" icon={faLaravel} />
              <FontAwesomeIcon color="red" icon={faGitAlt} />
              <FontAwesomeIcon color="greenplum" icon={faFigma} />
            </div>
            <div className="row no-gutters justify-content-center">
              <FontAwesomeIcon icon={faJenkins} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon color="blue" icon={faWindows} />
              <FontAwesomeIcon color="brown" icon={faLinux} />
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          {/*<div className="container">*/}
            <h3>Projects</h3>
            <hr />

            <div className="row justify-content-around align-items-start">
              <Project
                // key={index}
                img={this.state.project[0].img}
                title={this.state.project[0].title}
                about={this.state.project[0].about}
                url={this.state.project[0].url}
              />

              <Project
                // key={index}
                img={this.state.project[1].img}
                title={this.state.project[1].title}
                about={this.state.project[1].about}
                url={this.state.project[1].url}
              />

              <Project
                // key={index}
                img={this.state.project[2].img}
                title={this.state.project[2].title}
                about={this.state.project[2].about}
                url={this.state.project[2].url}
              />
            </div>
          {/*</div>*/}
        </section>

        <section
          className="community row justify-content-around align-items-center no-gutters"
          id="community"
        >
          <div className="col-lg-8">
            <h3>Volunteering</h3>
            <hr />
            <div>
              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Facebook Developers Circles Owerri"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561677/devc_kqgqnl.png"
                title="Community Lead"
                duration="July 2019 - Present"
                experience_url="https://www.facebook.com/groups/325261998362175/"
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="GitHub Education"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561676/gce_qe06gz.png"
                title="Campus Expert"
                duration="Sept. 2018 - Present"
                experience_url="https://githubcampus.expert/OPARA-PROSPER/"
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Andela Learning Community"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561676/alc_uuvbg1.png"
                title="Learning Community Ambassador"
                duration="May 2018 - Present"
                experience_url="https://alcimo.herokuapp.com"
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Open Source Community Africa"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561682/osca_baceyc.png"
                title="Community Lead"
                duration="July 2018 - Jan. 2019"
                experience_url="https://alcimo.herokuapp.com"
              />
            </div>
          </div>
        </section>

        <section className="speaking-timeline" id="talks">
          {/*<div className="container">*/}
          <h3>Talks</h3>
          <hr />

          <Talk
            key={1}
            title="Learning: a developer's perspective"
            talks={[
              ["Google Developer Group Owerri Info Session", "Feb. 2020"],
              ["Forloop Aba", "Jan. 2018"],
              ["Microsoft Student Community FUTO", "Nov. 2019"],
            ]}
            label="talk"
            link="https://speakerdeck.com/opara_prosper79/learning-a-developers-perspective-c6f2f021-3939-46f1-86fe-1108734bd66c"
          />
          <Talk
            key={2}
            title="Git/GitHub: The basics and beyond"
            label="workshop"
            talks={[
              ["Microsoft Student Community FUTO", "Feb. 2019"],
              ["Open Source Community Afria Aba", "March 2019"],
            ]}
            link="https://speakerdeck.com/opara_prosper79/github-the-basics-and-beyond"
          />
          <Talk
            key={3}
            title="Intro to HTML5 for game development"
            label="workshop"
            talks={[["Developer Circles Owerri Build Day", "Nov 2019"]]}
            link="#"
          />
          {/*</div>*/}
        </section>

        <section id="contact" className="contact">
          <h3>Contact Me</h3>
          <hr />
          <div
            className="row justify-content-center text-center"
            style={{ margin: "auto" }}
          >
            <div className="svg col-lg-4">
              <a href="https://github.com/OPARA-PROSPER">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>

              <a href="https://linkedin.com/in/prosper-opara/">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>

              <a href="https://twitter.com/kodekage">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>

              <a href="https://dev.to/kodekage">
                <FontAwesomeIcon icon={faDev} size="3x" />
              </a>
            </div>

            <div
              className="col-lg-4 text-left"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleContactSubmission}
            >
              <form className="contact-form">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="what's your name?"
                    value={this.state.sender}
                    onChange={this.handleSenderChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email address"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message for me..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                  />
                </div>

                <button className="btn-primary" type="submit">
                  Send!
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
