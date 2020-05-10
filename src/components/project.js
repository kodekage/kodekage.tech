import React from "react"

const Project = ({ img, title, url }) => (
  <div
    className="project-item col-lg-5"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6), rgba(0, 0, 0, 1)), url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
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

export default Project
