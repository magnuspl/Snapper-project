import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from './person.json'
import jsonPersons from './persons.json'
import TaskBox from '../components/TaskBox'
import ConversationBox from '../components/TaskBox'
import Tabs from '../components/Tabs'

const SecondPage = () => (
  <div>
    <div className="header">
      <TaskBox/>
      <ConversationBox/>
    </div>
    <div className="list">
    </div>
  </div>
)

export default SecondPage
