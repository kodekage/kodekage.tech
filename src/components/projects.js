import React from 'react'

export default ({img, title, about, url}) => (
  <div className="col-lg-5 project-item">
    <a href={url}>
    <img src={img} alt={img}/>

    <div className="project-detail">
      <h4>{title}</h4>
      
      <span style={{color: '#fff', fontWeight: '100'}}>{about}</span>
    </div>
    </a>
  </div>
)