import React from 'react';
import { database } from '../firebase';
// const database = require('firebase/database');

function Auth() {
  let transmittingData = false; 
  let counter = 50;

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
      // window.removeEventListener('deviceorientation', printData); //orientation event
      window.removeEventListener('devicemotion', writeData); //acceleration event
    } else {
      // window.addEventListener('deviceorientation', printData); //orientation event
      window.addEventListener('devicemotion', writeData); //acceleration event
    } 
  }

  function writeData(res){
    if(counter % 50 === 0) {
      console.log(`${res.accelerationIncludingGravity.z}`); //acceleration event
      database.ref('accelerometerData/').set({
        zAxis: res.accelerationIncludingGravity.z,
      });
      counter += 1;
    } else {
      counter += 1;
    }
  }

  // function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }

  return (
    <React.Fragment>
      <button onClick={requestPermission}>Authorize</button>
      <button onClick={toggleDataTransmission}>Start Meditation</button>
    </React.Fragment>
  );
}

export default Auth;