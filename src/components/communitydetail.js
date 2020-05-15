import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin, faLink} from '@fortawesome/free-solid-svg-icons'

const CommunityDetail = ({ title, duration, experience_url, community }) => (
  <div className="about-community row justify-content-between">
    <div className="community-item col-lg-4 col-md-4">
      <div style={{ fontSize: "15px" }}>
        <h4>{title}</h4>
        <span className="duration">{duration}</span>
      </div>
    </div>

    <div className="community-item-about col-lg col-md">
      <a href={experience_url} rel="noopener noreferrer" target="_blank">
        <h3><FontAwesomeIcon icon={faLink}/> {community}</h3>
      </a>
    </div>

    <div
      className="col-lg-2 col-md"
      style={{ fontSize: "13px", fontWeight: "600" }}
    >
      <FontAwesomeIcon icon={faMapPin}/> Owerri, Nigeria
    </div>
  </div>
)

export default CommunityDetail
