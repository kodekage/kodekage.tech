import React from "react"

export default ({ title, label, talks, link }) => (
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
