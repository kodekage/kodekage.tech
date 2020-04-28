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

import "../styles/community.css"

class CommunityPage extends React.Component {
  componentDidMount = () => {
    const config = {
      origin: "right",
      duration: 1000,
      delay: 500,
      scale: 1,
      easing: "ease",
      reset: true,
    }
    const config1 = {
      origin: "right",
      duration: 1000,
      delay: 500,
      scale: 1,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
    }

    ScrollReveal().reveal(this.refs.box1, config)
    ScrollReveal().reveal(this.refs.box2, config1)
  }

  render() {
    const CommunityDetail = ({
      img,
      title,
      duration,
      experience,
      experience_url,
      clas,
      community,
    }) => (
      <div className={clas}>
        <div className="community-item col-lg-2 col-md-4">
          <img src={img} alt={img} />

          <div style={{ fontSize: "15px" }}>
            <h4>{community}</h4>
            <span>{duration}</span>
          </div>
        </div>

        <div className="community-item-about col-lg col-md">
          <a href={experience_url}>
            <h3>{title}</h3>
          </a>

          {experience}
        </div>
      </div>
    )

    const Talk = ({ title, label, talks, link }) => (
      <div className="talk">
        <div className="talk-detail">
          <h4>{title}</h4>

          <span className="talk-label">{label}</span>
        </div>

        <div className="talk-event">
          <div>
            <h4>Presentations</h4>
            {talks.map(item => (
              <h5>
                {item[0]} (<i>{item[1]}</i>)
              </h5>
            ))}
          </div>

          <div>
            <h4>Resources</h4>

            <a href={link}>Slide Link</a>
          </div>
        </div>
      </div>
    )

    return (
      <Layout>
        <div className="community row no-gutters">
          <header className="col-lg-5">
            <div className="svg" ref="box1">
              <h2>I volunteer for</h2>

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
            <section>
              {/* <h3>Volunteering for</h3> */}

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Facebook Developers Circles"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561677/devc_kqgqnl.png"
                title="Developer Circle Owerri Co-lead"
                duration="July 2019 - Present"
                experience={
                  <div>
                    <p>
                      Developer Circles from Facebook is a program designed to
                      create locally organized communities for developers. These
                      communities are meant to educate and provide a forum for
                      discussion and knowledge sharing around topics that are
                      top-of-mind for developers in a particular market. <br />
                      <span>
                        Developer Circle Owerri is the Facebook Developer
                        Circles Community in Owerri, Imo State
                      </span>
                      . As a community we are committed to building the next
                      generation of creators that will build software projects
                      that solve real world problems and also generate revenue.
                      To achieve our goal we focus on;
                    </p>
                    <ul>
                      <li>Hackathons for building software products.</li>

                      <li>
                        Developer Meetups to discuss software development
                        topics, principles, patterns and best practices.
                      </li>

                      <li>
                        Development workshops were we get our hands dirty by
                        learning and practicing new technologies cutting across
                        various tech fields.
                      </li>
                    </ul>
                  </div>
                }
                experience_url="https://www.facebook.com/groups/325261998362175/"
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="GitHub Education"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561676/gce_qe06gz.png"
                title="GitHub Campus Expert"
                duration="Sept. 2018 - Present"
                experience_url="https://githubcampus.expert/OPARA-PROSPER/"
                experience={
                  <div>
                    <p>
                      GitHub Campus Experts enrich the technology communities on
                      their campuses. As a campus expert I work directly with
                      the GitHub Education team to make technology and the
                      resources for learning more about technology available and
                      easily accessible to passionate enthusiast and students on
                      campus through;
                    </p>

                    <ul>
                      <li>
                        Offering online and onsite mentorship to students on
                        fullstack web development technologies.
                      </li>

                      <li>
                        Organizing workshops, meetups and hackathons focused on
                        teaching students fullstack web technologies, versioning
                        with Git and GitHub etc and building actual stuffs with
                        the knowledge they acquire.
                      </li>

                      <li>
                        Partnering with companies in the technology market to
                        help make opportunities available to students.
                      </li>
                    </ul>
                  </div>
                }
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Andela Learning Community"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561676/alc_uuvbg1.png"
                title="Learning Community Ambassador"
                duration="May 2018 - Present"
                experience_url="https://alcimo.herokuapp.com"
                experience={
                  <div>
                    <p>
                      The Andela Learning Community is a network of people
                      technologists and tech enthusiasts across Africa dedicated
                      to learning how to use technology to solve humanity’s
                      problems. I was team lead for the LCA's in Imo state
                      (Nigeria) during which we successfully;
                    </p>

                    <ul>
                      <li>
                        Organized and facilitated <span>5+</span> ALC meetups.
                      </li>
                      <li>
                        Kept contact with scholars in Imo state using our online
                        platforms for virtual discussion and mentorship
                        sessions.
                      </li>

                      <li>
                        Overall we made sure our learners where{" "}
                        <span>EPIC</span>
                      </li>
                    </ul>
                  </div>
                }
              />

              <CommunityDetail
                clas="about-community row justify-content-center align-items-start"
                community="Open Source Community Africa"
                img="https://res.cloudinary.com/github-com-opara-prosper/image/upload/v1586561682/osca_baceyc.png"
                title="Community Lead"
                duration="July 2018 - Jan. 2019"
                experience_url="https://alcimo.herokuapp.com"
                experience={
                  <div>
                    <p>
                      Open Source Community Africa (O.S.C.A) is for open source
                      lovers, enthusiasts, advocates and experts within and
                      across Africa with the sole aim of increasing the rate of
                      credible contributions by African software developers,
                      designers, writers and everyone involved in the sphere of
                      technology to open source projects both locally and
                      globally, changing the perception of Africans from just
                      the billion users to the{" "}
                      <span>NEXT BILLION CREATORS</span>. During my time leading
                      the <span>OSCA IMO</span> chapter, we were able to host a
                      meetup themed <span>"Growing with Open Source"</span> and
                      we had 20 open source enthusiast attend.
                    </p>
                  </div>
                }
              />
            </section>

            <section className="speaking-timeline" id="talks">
              <h3>Talks</h3>
              <Talk
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
                title="Git/GitHub: The basics and beyond"
                label="workshop"
                talks={[
                  ["Microsoft Student Community FUTO", "Feb. 2019"],
                  ["Open Source Community Afria Aba", "march 2019"],
                ]}
                link="https://speakerdeck.com/opara_prosper79/github-the-basics-and-beyond"
              />
              <Talk
                title="Intro to HTML5 for Game Development"
                label="workshop"
                talks={[["Developer Circles Owerri Build Day", "Nov 2019"]]}
                link="#"
              />
            </section>

            <Footer />
          </article>
        </div>
      </Layout>
    )
  }
}

export default CommunityPage
