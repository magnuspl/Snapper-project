import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from './person.json'
import jsonPersons from './persons.json'
import TaskBox from '../components/TaskBox'
import ConversationBox from '../components/ConversationBox'
import Tabs from '../components/Tabs'
import PersonHeader from '../components/PersonHeader'
import HeaderBox from '../components/HeaderBox'

const SecondPage = () => (
  <div>
    <Link to="/">List</Link>
    <HeaderBox/>
    <PersonHeader/>
    <div className="list">
      <Tabs/>
    </div>
  </div>
)

export default SecondPage
