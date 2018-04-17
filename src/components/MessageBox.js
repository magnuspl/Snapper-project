import React from 'react'
import Link from 'gatsby-link'

const TaskBox = TaskBox => (
  <div className="MessageBox">
<textarea placeholder="Enter text here..." rows="4" cols="50" name="comment" form="usrform">
</textarea>
<form id="usrform">
<input type="submit"></input>
</form>

  </div>
)

export default TaskBox
