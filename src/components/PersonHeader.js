import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from '../pages/person.json'
import image from '../pages/97.png'

function loadData() {
  var json = jsonPerson.now;
  var arr = [];
  json.forEach((element, index) => {
    arr.push(element)
  });
  return arr
}

const PersonHeader = () => (
  <div className="person">
    <div className="image">
      <img src={image} height="60" width="60"></img>
    </div>
    <div className="name">
      <h4>DANIEL DAHLBERG</h4></div>
  </div>
)

export default PersonHeader
