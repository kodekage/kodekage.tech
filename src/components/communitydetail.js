import React from "react"

const CommunityDetail = ({ title, duration, experience_url, community }) => (
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

export default CommunityDetail
