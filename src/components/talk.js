import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink} from '@fortawesome/free-solid-svg-icons'

const Talk = ({ title, talks, link }) => (
  <div className="talk">
    <div className="talk-detail">
      <a href={link}>
        <h4><FontAwesomeIcon icon={faLink}/>{title}</h4>
      </a>
    </div>

    <hr />

    <div className="talk-event">
      <div>
        <h4>Presentations</h4>
        {talks.map((item, index) => (
          <h5 key={index}>
            {item[0]} <i>{item[1]}</i>
          </h5>
        ))}
      </div>
    </div>
  </div>
)

export default Talk
