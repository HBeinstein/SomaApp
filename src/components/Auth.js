import React, { useState } from 'react';
import { database } from '../firebase';
import '../assets/css/index.css';
import '../assets/css/navbar.css';

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

   //Collect data from phone and console.log it
  function toggleDataTransmission() {
    transmittingData = !transmittingData;
    console.log(transmittingData);

    if (!transmittingData){
      window.removeEventListener('devicemotion', writeData); //acceleration event
    } else {
      window.addEventListener('devicemotion', writeData); //acceleration event
    } 
  }

  //WRITE data to DB, calculate position using acceration (s = ut + (1/2)a t^2), s = position, u = velocity at start, t=time, a = constant acceleration rate, Euler's Formula

  function writeData(res){
    counter += 1;
    if(counter === 60){
      // console.log(0.5*res.accelerationIncludingGravity.z*1*(1/0.0254));
      let position = 0.5*res.acceleration.z*3*(1/0.0254); //Needs work!
      console.log(position); //in inches (converted from meters (per second))

      database.ref('accelerometerData/').set({
        zAxis: position,
      });

      counter = 0;
    }
  
    // interval = 0.016 seconds
    // 1/0.01666666753590107 = 60 times
  }
  
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    return (
      <React.Fragment>
        <button onClick={requestPermission}>Authorize</button>
        <button onClick={toggleDataTransmission}>Start Meditation</button>
      </React.Fragment>
    );
  } else {
    return (
      <div className="auth-redirect-container">
      <h3>Visit this page on your phone to authorize!</h3>
      </div>
    );
  }
}

export default Auth;