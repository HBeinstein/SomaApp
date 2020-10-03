import React from 'react';
import database from '../firebase';
// const database = require('./../firebase');
require('firebase/database');

function Meditation() {


  //COLLECT DATA FROM PHONE AND CONSOLE LOG IT (W0RKING ON WRITING TO DB)

  // document.getElementById("toggleDataTransmission").addEventListener("click", toggleDataTransmission);

  // //recursive version
  // function toggleDataTransmission() {
  //   transmittingData = !transmittingData;
  //   console.log(transmittingData);

  //   if (!transmittingData){
  //     // window.removeEventListener('deviceorientation', printData); //orientation event
  //     window.removeEventListener('devicemotion', printData); //acceleration event
  //   } else {
  //     // window.addEventListener('deviceorientation', printData); //orientation event
  //     window.addEventListener('devicemotion', printData); //acceleration event
  //   } 
  // }

  // function printData(res){
  //   if(counter % 50 === 0) {
  //     // console.log(res.alpha);
  //     console.log(`${res.accelerationIncludingGravity.z}`); //acceleration event
  //     counter += 1;
  //   } else {
  //     counter += 1;
  //   }
  // }


  // WRITE data to db, updates when value is changed

      // ref.on('value', function(dataSnapshot) {
      
    // });

  //   document.getElementById("sendData").addEventListener("click", sendData);

  //   function sendData() {
  //     console.log("hi")
  //     let axisRef = database.ref();
  //     axisRef.set({
  //       z: {
  //         value: 5
  //       }
  //     });
  //   }


  // READ data from db, retrieves once
  function getData() {
    database
      .ref('/zAxis/')
      .once('value')
      .then(function(snapshot) {
      let zAxis = snapshot.val();
      console.log(zAxis);
    })
  }

// READ data from db, updates on change in value
//   let xAxisVal = database.ref('xAxis/');
//   xAxisVal.on('value', function(snapshot) {
//   console.log(snapshot.val());
// });



return (
  <React.Fragment>
    <h3>Meditation Page</h3>
    <button onClick={getData}></button>
  </React.Fragment>
);
}

export default Meditation;