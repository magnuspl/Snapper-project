import React from 'react'
import Link from 'gatsby-link'
import ListItem from './ListItem'
import Courses from './Courses'
import MessageBox from './MessageBox'
import Person from './Person'

function openTab(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}

const Tabs = Tabs => (
  <div className="tabs">
    <div className="tab">
    <button className="tab-links" onClick={()=>{openTab(event, 'Bruker'); }}>Bruker</button>
    <button className="tab-links" onClick={()=>{openTab(event, 'Oppgaver'); }}>Oppgaver</button>
    <button className="tab-links" onClick={()=>{openTab(event, 'Melding'); }}>Send melding</button>
    <button className="tab-links" onClick={()=>{openTab(event, 'Kurs'); }}>Meld på kurs</button>
  </div>

  <div id="Bruker" className="tab-content">
    <Person/>
  </div>

  <div id="Oppgaver" className="tab-content">
    <ListItem/>
  </div>

  <div id="Melding" className="tab-content">
    <MessageBox/>
  </div>

  <div id="Kurs" className="tab-content">
    <Courses/>
  </div>

</div>
)

export default Tabs
