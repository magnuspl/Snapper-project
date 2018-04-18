import React from 'react'
import Link from 'gatsby-link'

const MessageBox = () => (
  <div className="message-box">
    <textarea placeholder="Type message here..." name="comment" form="usrform">
    </textarea>
    <form><input type="submit"></input></form>
  </div>
)

export default MessageBox
