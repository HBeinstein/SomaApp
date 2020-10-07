import React from 'react';
import { database } from '../firebase';
// const database = require('firebase/database');

function Auth() {
  let transmittingData = false; 
  let counter = 0;

  //Authorize sensor transmission

  function requestPermission(){
    DeviceOrientationEvent.requestPermission()
    .then(res => {
      if(res === "granted") {
        console.log("successfully authenticated");
      } else {
        console.error('error')
      }
    })
  }

   //COLLECT DATA FROM PHONE AND CONSOLE LOG IT (W0RKING ON WRITING TO DB)

  function toggleDataTransmission() {
    transmittingData = !transmittingData;
    console.log(transmittingData);

    if (!transmittingData){
      window.removeEventListener('devicemotion', writeData); //acceleration event
    } else {
      window.addEventListener('devicemotion', writeData); //acceleration event
    } 
  }

  // WRITE data, old function
  // function writeData(res){
  //   if(counter % 60 === 0) {
  //     console.log(`${res.accelerationIncludingGravity.y}`); //acceleration event
  //     database.ref('accelerometerData/').set({
  //       zAxis: res.accelerationIncludingGravity.z,
  //     });
  //     counter += 1;
  //   } else {
  //     counter += 1;
  //   }
  // }

  //WRITE data to DB, new function using distance calc
  function writeData(res){
    counter += 1;
    if(counter === 500){
      // console.log(0.5*res.accelerationIncludingGravity.z*1*(1/0.0254));
      let position = 0.5*res.acceleration.z*3*(1/0.0254);
      console.log(position);

      database.ref('accelerometerData/').set({
        zAxis: position,
      });

      counter = 0;
    }
    
    // interval = 0.016 seconds
    // 1/0.01666666753590107 = 60 times
  }

  return (
    <React.Fragment>
      <button onClick={requestPermission}>Authorize</button>
      <button onClick={toggleDataTransmission}>Start Meditation</button>
    </React.Fragment>
  );
}

export default Auth;