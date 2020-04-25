import React from "react"

export default ({ img, title, company, detail, duration }) => (
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
