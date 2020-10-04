import React from 'react';
import { database } from '../firebase';
// require('firebase/database');
import './../assets/css/animation.css'

function Meditation() {
  // READ data from db, retrieves once
  // function getData() {
  //   database
  //     .ref('/zAxis/')
  //     .once('value')
  //     .then(function(snapshot) {
  //     let zAxis = snapshot.val();
  //     console.log(zAxis);
  //   })
  // }

  // // READ data from db, updates on change in value
  function getData() {
  let zAxisVal = database.ref('accelerometerData/');
  console.log(zAxisVal);
  zAxisVal.on('value', function(snapshot) {
  console.log(snapshot.val());
});
  }

return (
  <React.Fragment>
    <h3>Meditation Page</h3>
    <button onClick={getData}>Start Meditation</button>
    <div className='animation-test'></div>
  </React.Fragment>
);
}

export default Meditation;