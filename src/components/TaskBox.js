import React from 'react'
import Link from 'gatsby-link'
import Ansatte from './Charts/Ansatte'
import Mine from './Charts/Mine'

const TaskBox = TaskBox => (
  <div>
  <div className="box">
    <h4>OPPGAVER</h4>
    <div className="box-task">
    <Mine/>
    <Ansatte/>
    </div>
  </div>

  </div>
)

export default TaskBox
