import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from '../pages/person.json'

function loadData() {
  var json = jsonPerson.now;
  var arr = [];
  json.forEach((element, index) => {
    arr.push(element)
  });
  console.log(arr)
  return arr
}

const PersonHeader = PersonHeader => (
  <div className="Person">
    <div className="image">
      image
    </div>
    <div className="Name"></div>
      Daniel Dahlberg
  </div>
)

export default PersonHeader
