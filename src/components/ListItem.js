import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from '../pages/person.json'

function loadData() {
  var json = jsonPerson.now;
  var arr = [];
  json.forEach((element, index) => {
    arr.push(element)
  });
  return arr
}

const ListItem = ListItem => (
  <div className="list">
    <ul className="Employee">{loadData().map(function(item, i){
        return <li>
          <div className="element">
            {loadData()[i].date}
          </div>
      </li>
      })}
    </ul>
  </div>
)

export default ListItem
