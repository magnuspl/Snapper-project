import React from 'react'
import Link from 'gatsby-link'
import ConversationBox from './ConversationBox'
import TaskBox from './TaskBox'

const HeaderBox = () => (
  <div className="header">
    <TaskBox/>
    <ConversationBox/>
  </div>
)

export default HeaderBox
