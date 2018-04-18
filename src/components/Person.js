import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from '../pages/person.json'

function loadData() {
  var json = jsonPerson.person;
  return json
}

const Person = () => (
  <div className="person-box">
    <div className="course-element">
      <p>First name: {loadData().firstname}</p>
      <p>Last name: {loadData().lastname}</p>
      <p>Email: {loadData().email}</p>
      <p>Mobile: {loadData().mobile}</p>
    </div>
  </div>
)

export default Person
