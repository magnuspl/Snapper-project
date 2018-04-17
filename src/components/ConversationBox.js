import React from 'react'
import Link from 'gatsby-link'


const ConversationBox = ConversationBox => (
  <div>
    <div className="box">
      <p className="boxHeader">Samtaler</p>
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
          <p className="person">Jostein Leira</p>
        </div>
        </div>
      </div>
    </div>
  </div>
)

export default ConversationBox
