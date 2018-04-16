import React from 'react'
import Link from 'gatsby-link'

const ConversationBox = ConversationBox => (
  <div className="box">
    <p className="boxHeader">Samtaler</p>
    <div className="row">
        <div className="element">
        Gjennomførte:
      </div>
        <div className="element">
        Planlagt:
      </div>
    </div>
    <div className="row">
        <div className="element">
        Neste:
      </div>
    </div>
  </div>
)

export default ConversationBox
