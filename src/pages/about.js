import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faDev,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import ScrollReveal from "scrollreveal"

import Layout from "../components/layout"
import Footer from "../components/footer"

import "../styles/about.css"
import blue from "../images/blue.png"

class AboutPage extends React.Component {
  componentDidMount = () => {
    const config = {
      origin: "right",
      duration: 2000,
      delay: 1000,
      scale: 1,
      easing: "ease",
      reset: true,
    }
    const config1 = {
      origin: "right",
      duration: 2000,
      delay: 1500,
      scale: 1,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
    }

    ScrollReveal().reveal(this.refs.box1, config)
    ScrollReveal().reveal(this.refs.box2, config1)
  }

  render() {
    const Project = ({ img, title, about, url }) => (
      <div className="col-lg-5 project-item" style={img? {height: '350px'}: {height: '200px', padding: '2em .5em'}}>
        <a href={url}>

          {img ? <img src={img} alt={img} /> : null }

          <div className="project-detail">
            <h4>{title}</h4>

            <span style={{ color: "#fff", fontWeight: "100" }}>{about}</span>
          </div>
        </a>
      </div>
    )

    const Work = ({ img, title, company, detail, duration }) => (
      <div className="work row justify-content-center align-items-start">
        <div className="work-company col-lg-3 col-md-4">
          <img src={img} alt={img} />

          <div>{duration}</div>
        </div>

        <div className="work-detail col-lg col-md col-s">
          <div className="work-title">
            <h3>{company}</h3>
            <h4>
              {title} (<i>Remote</i>)
            </h4>
          </div>

          <p>{detail}</p>
        </div>
      </div>
    )

    return (
      <Layout>
        <div className="about row no-gutters">
          <header className="col-lg-5">
            <div className="svg" ref="box1">
              <h2>Hi! I'm Prosper</h2>

              <a href="https://twitter.com/kodekage">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>

              <a href="https://stackoverflow.com/users/10104994/opara-prosper">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>

              <a href="https://github.com/OPARA-PROSPER">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

              <a href="https://dev.to/kodekage">
                <FontAwesomeIcon icon={faDev} size="2x" />
              </a>
            </div>
          </header>

          <article className="col-lg" ref="box2">
            <section className="about-section">
              <p className="tdlr">
                TLDR; <span>Fullstack Engineer</span>,{" "}
                <span>Technical Writer</span>.
              </p>

              <p>
                I'm Prosper Opara. I have being coding for over <span>2+</span>{" "}
                years focusing mostly on building fullstack web applications as
                a freelancer for clients, contributing to open source and
                working on personal projects. I'm a{" "}
                <span>stack agnostic developer</span> as I pretty much learn
                what I need to deliver projects that interest me. Nevertheless,
                I have more experience building{" "}
                <span>fullstack Javascript applications</span> (React for FE and
                Node for BE), <span>API's</span> (RESTful and GraphQL),
                persisting data with <span>SQL</span> and <span>NoSQL</span>{" "}
                database. Recently, I started digging into <span>docker</span>,{" "}
                <span>K8s</span> and <span>cloud computing</span>.
              </p>

              <p>
                When i'm not coding I love to spend my time writing technical
                articles on web technologies and volunteering for developer
                communities within my region. I'm a{" "}
                <span> GitHub Campus Expert</span> (#GithubEducation),{" "}
                <span>Co-lead for the Facebook Developer Circles Owerri</span>{" "}
                (#DevCOwerri) and a <span>Learning Community Ambassador</span>{" "}
                for the Andela Learning Community (#ALCImo)
              </p>

              <p>
                P.S: I love being called <span>kodekage</span> on the internet
                (it's an aliase I adopted after seeing the great ninja war in
                the naruto anime series, funny).
              </p>
            </section>

            <section className="job-experience" id="jobexperience">
              <h3>Work Experience</h3>

              <Work
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/e_vectorize/v1588085469/nopic_startup_t5ljpy.png"
                title="Fullstack JavaScript Developer"
                company="Freelancing"
                duration="Jan. 2018 - Present"
                detail={
                  <p>
                    I build scalable full stack web applications, API's for
                    clients using. My stack includes; <span>MERN</span>,{" "}
                    <span>PHP/Laravel</span>, Database{" "}
                    <span>(Postgresql, MySQL, MongoDB)</span>. Projects I have
                    worked on;
                    <br />
                    <br />
                    <ul>
                      <li>
                        I worked on and delivered the first company portfolio
                        site for <a href="https://agrohive.com.ng">Agrohive</a>
                      </li>
                      <li>
                        I worked on the{" "}
                        <a href="https://alcimo.herokuapp.com">ALC IMO</a>{" "}
                        community website from designe to deployment.
                      </li>
                      <li>
                        I built an assignment management system using vanilla
                        PHP (I can't share source code due to NDA with client).
                      </li>
                    </ul>
                  </p>
                }
              />
              <Work
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561677/hng_jyeyxl.jpg"
                title="Backend Developer Intern"
                company="HNG Internship"
                detail={
                  <p>
                    The HNG internship is a 3-month remote internship designed
                    to find and develop the most talented software developers.
                    The intern coders are introduced to complex programming
                    frameworks, and get to work on real world software. During
                    the HNG 6.0 Internship I successfully:
                    <ul>
                      <li>
                        Consumed the slack API, and built a Slack app (bot) that
                        stores conversations in channels.
                      </li>
                      <li>
                        Learnt the agile methodology for software development
                        using pivotal tracker for delivering projects to
                        clients.
                      </li>
                      <li>
                        Deepened my understanding of versioning using Git and
                        GitHub for team collaboration.
                      </li>
                      <li>
                        Learnt empathy leading a software engineering team which
                        require more than coding skills.
                      </li>
                      <li>
                        Worked on a php project using the laravel framework.
                      </li>

                      <strong>Small wins:</strong>
                      <ol>
                        <li>
                          I learnt the architecture of Restful API's and how to
                          build one
                        </li>
                        <li>I got a deeper understanding of Node/Express.</li>
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
                  </p>
                }
                duration="Sept. 2019 - Nov. 2019"
              />
              <Work
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561692/thisdot_p2ohfj.jpg"
                title="Contract Technical Writer"
                company="ThisDot Media"
                detail={
                  <p>
                    I was contracted to write detailed articles based on ThisDot
                    Media Yolo brolo series on the company YouTube channel. I
                    delivered two technical articles that were published:
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
                  </p>
                }
                duration="July 2019 - July 2019"
              />
            </section>

            <section className="projects" id="projects">
              <div className="container">
                <h3>Projects</h3>

                <div className="row no-gutters align-items-center justify-content-center text-left">
                  <Project
                    img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,h_213,w_400/v1586561686/team_om5ixx.png"
                    title="Teamwork [Client App]"
                    about="Teamwork is a social network for employees of an organization built to facilitate more interaction between colleagues and promote team bonding."
                    url="https://github.com/OPARA-PROSPER/teamwork-client"
                  />

                  <Project
                    img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,w_400/v1586561691/team-api_k92j55.png"
                    title="Teamwork [API]"
                    about="This project is a RESTFul API for the teamwork client app. It's built with Nodejs/Expressjs"
                    url="https://github.com/OPARA-PROSPER/teamwork"
                  />

                  <Project
                    img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,e_fill_light:0,w_400/v1586561701/gads_twnpis.png"
                    title="GADSIMO"
                    about="Google Africa Developer Scholarship (GADS) community in Imo state community website"
                    url="https://alcimo.herokuapp.com"
                  />

                  <Project
                    img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/c_scale,w_400/v1588084502/project_z8921h.png"
                    title="Personal Site"
                    about="My personal website"
                    url="/"
                  />

                  <Project
                    title="Currency Converter App"
                    about="A Progressive Web Application that performs currency conversion"
                    url="https://github.com/OPARA-PROSPER/ALC_Currency_Converter"
                  />

                  <Project
                    title="Address Book"
                    about="An online contact list address book"
                    url="https://github.com/OPARA-PROSPER/addressBook"
                  />
                </div>
              </div>
            </section>
            <Footer />
          </article>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
