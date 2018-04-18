import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from '../pages/person.json'

function loadData() {
  var json = jsonPerson.future;
  var arr = [];
  json.forEach((element, index) => {
    arr.push(element)
  });
  return arr
}

const Courses = () => (
  <div className="list">
    <ul className="course">{loadData().map(function(item, i){
        return <li key={i}>
          <div className="course-element">
            <p>{loadData()[i].date}</p>
            <p className="coursename">{loadData()[i].competance.course}</p>
            <p>{loadData()[i].competance.coursetypename}</p>
          </div>
      </li>
      })}
    </ul>
  </div>
)

export default Courses
