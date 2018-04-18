import React from 'react'
import Link from 'gatsby-link'
import image from '../pages/1.png'


const ConversationBox = () => (
  <div>
    <div className="box">
      <p className="box-header">Samtaler</p>
      <div className="row">
          <div className="element">
          <p>Gjennomførte:</p>
          <p className="conversation">10</p>
        </div>
          <div className="element">
            <p>Planlagt:</p>
            <p className="conversation">2</p>
        </div>
      </div>
      <div className="row">
          <div className="next-element">
          Neste:
        <div className="next-element-person">
          <div className="image">
            <img src={image} height="60" width="60"></img>
          </div>
          <div className="next-person-name">
            <p className="next-person">Jostein Leira</p>
            <p className="next-date">mandag 7.mars</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
)

export default ConversationBox
