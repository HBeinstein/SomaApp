import React, { useState } from 'react';
import Scene from './Scene';
import { database } from '../firebase';
import '../assets/css/meditations.css';
import './../assets/css/index.css'

function Meditation() {
  const [view, setView] = useState('startMeditation');
  const [axisVal, setAxisValue] = useState(0);

  //READ data from db, updates on change in value, changes view to render scene
  function getData() {
    let zAxisVal = database.ref('accelerometerData/');
    console.log(zAxisVal);

    zAxisVal.on('value', function(snapshot) {
      setAxisValue(snapshot.val());
    });

    setView('meditation');
  }

  //Switch view back to start meditation screen
  function endMeditation(){
    setView('startMeditation');
  }

  //Decide which view to render
  if(view === "meditation") {
    return (
      <React.Fragment>
        <Scene endMeditation={ endMeditation } axisVal={ axisVal }/>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
          <div className="meditation-content-container">
            <h3>Select a meditation below to get started</h3>
            <p>Lorem Ipsum vestibulum lectus mauris ultrices eros in. Duis ut diam quam nulla porttitor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="meditation-selection-container">
              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button onClick={getData} className="start-meditation button">Start Meditation</button>
              </div>

              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button>Coming soon!</button>
              </div>

              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button>Coming soon!</button>
              </div>

              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button>Coming soon!</button>
              </div>

              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button>Coming soon!</button>
              </div>

              <div>
                <img src="./img/meditation-thumbnail.png" className="meditation-thumbnail"></img>
                <button>Coming soon!</button>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Meditation;