import React from 'react'
import Link from 'gatsby-link'
import jsonPerson from './person.json'
import jsonPersons from './persons.json'
import TaskBox from '../components/TaskBox'
import ConversationBox from '../components/ConversationBox'
import HeaderBox from '../components/HeaderBox'

function loadData() {
  var json = jsonPersons.persons;
  var arr = [];
  json.forEach((element, index) => {
    arr.push(element)
  });
  return arr
}

function getImagePath() {
  var j;
  var newPaths = []
  for (j = 0; j < loadData().length; j++) {
    var removeFiles = (loadData()[j].person.image+'.png').replace("/files", "")
    var removeImage = removeFiles.replace("image", "")
    var removeSlash = removeImage.replace("//", "./")
    if(removeSlash == "undefined.png") {
      removeSlash = "./face.png"
    }
    newPaths.push(removeSlash)
  }
  return newPaths
}

function setTaskName(person) {
  var text;
  if ((loadData()[person].person.statistics.requirements_missing)==0) {
    return "Kritiske oppgaver"
  }
  else {
    return "Oppgaver"
  }
}

function getType(person) {
  if ((loadData()[person].person.statistics.requirements_missing)==0) {
    return getTasks()[person];
  }
  else {
    return getMissingTasks()[person];
  }
}


function getTasks() {
  var j;
  var tasks = [];
  for (j = 0; j < loadData().length; j++) {
    tasks.push(loadData()[j].person.statistics.requirements_not_due)
  }
  return tasks
}

function getMissingTasks() {
  var j;
  var tasks = [];
  for (j = 0; j < loadData().length; j++) {
    tasks.push(loadData()[j].person.statistics.requirements_missing)
  }
  return tasks
}

getImagePath()

const IndexPage = () => (
  <div>
  <HeaderBox/>
  <div className="title">
    <p>Ansatte</p>
  </div>
  <div className="list">
    <div>
        <ul className="employee">{loadData().map(function(item, i){
            return <li className="employee-list-item" key={i}>
              <div className="element-person">
                <div className="image">
                  <img src={require(getImagePath()[i])} className="portrait" height="80" width="80"></img>
                </div>
              <div className="name">
                <div className="fullname">
            <Link to="/person"><p>{loadData()[i].person.fullname}</p></Link>
                </div>
                <div className="phonenumber">
                  <p>email@snapper.no / {loadData()[i].person.mobile}</p>
                </div>
              </div>

            </div>
            <div className="element-conversation">
              <div className="conversation">
                <p>Neste samtale</p>
              </div>
              <div className="conversation-date">
                <p>Not available</p>
              </div>
            </div>
            <div className="element">
              <div className="tasktype">
              <p>{setTaskName(i)}</p>
              </div>
              <div className="taskamount">
                <p>{getType(i)}</p>
              </div>
            </div>
          </li>
          })}
        </ul>
    </div>
  </div>
  </div>
)

export default IndexPage
