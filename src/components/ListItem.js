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

const ListItem = ListItem => (
  <div className="list">
    <ul className="Course">{loadData().map(function(item, i){
        return <li key={i}>
          <div className="course-element">
            <p>{loadData()[i].date}</p>
            <p>{loadData()[i].competance.course}</p>
            <p>{loadData()[i].competance.coursetypename}</p>
          </div>


      </li>
      })}
    </ul>
  </div>
)

export default ListItem
