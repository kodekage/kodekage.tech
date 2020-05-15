import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin, faLink } from "@fortawesome/free-solid-svg-icons"

const Work = ({ url, location, title, company, detail, duration }) => (
  <div className="work row justify-content-center align-items-start no-gutters">
    <div className="work-company col-lg-2 col-md-4 order-lg-0 order-md-1 order-sm-0">
      <h3>{title}</h3>
      <div className="duration">{duration}</div>
    </div>

    <div className="work-company col-lg-2 order-lg-2 order-md-0 order-sm-2">
      <h3 className="location">
        <FontAwesomeIcon icon={faMapPin} /> {location}
      </h3>
    </div>

    <div className="work-detail col-lg col-md order-lg-1 order-md-2 col-s order-sm-1">
      <div className="work-title">
        <h3>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
            {company}
          </a>
        </h3>
      </div>
      {detail}
    </div>
  </div>
)

export default Work
