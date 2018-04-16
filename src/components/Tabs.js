import React from 'react'
import Link from 'gatsby-link'
import ListItem from './ListItem'

function openTab(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}

const Tabs = Tabs => (
  <div className="tabs">
    <div className="tab">
    <button className="tablinks" onClick={()=>{openTab(event, 'Bruker'); }}>Bruker</button>
    <button className="tablinks" onClick={()=>{openTab(event, 'Oppgaver'); }}>Oppgaver</button>
    <button className="tablinks" onClick={()=>{openTab(event, 'Melding'); }}>Melding</button>
    <button className="tablinks" onClick={()=>{openTab(event, 'Kurs'); }}>Kurs</button>
  </div>

  <div id="Bruker" className="tabcontent">
    <h3>Bruker</h3>
    <p>Bruker</p>
  </div>

  <div id="Oppgaver" className="tabcontent">
    <h3>Oppgaver</h3>
    <ListItem/>
  </div>

  <div id="Melding" className="tabcontent">
    <h3>Melding</h3>
    <p>Melding</p>
  </div>

  <div id="Kurs" className="tabcontent">
    <h3>Kurs</h3>
    <p>Kurs</p>
  </div>

</div>
)

export default Tabs
