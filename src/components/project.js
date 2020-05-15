import React from "react"

const Project = ({ img, title, url }) => (
  <div
    className="project-item col-lg-3"
    style={{
      background: `linear-gradient(180deg, rgba(225, 225, 225, .5), rgba(225, 255, 225, .3), rgba(255, 255, 255, .5)), url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div>
      <div className="project-detail">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h4>{title}</h4>
        </a>
      </div>
    </div>
  </div>
)

export default Project
