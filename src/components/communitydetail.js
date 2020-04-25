import React from "react"

export default ({
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
