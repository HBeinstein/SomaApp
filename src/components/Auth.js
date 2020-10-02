import React from 'react';
import database from '../firebase';

function Auth() {

  //Authorize sensor transmission
  // let transmittingData = false; 
  // let counter = 50;

  function requestPermission(){
    DeviceOrientationEvent.requestPermission()
    .then(res => {
      if(res === "granted") {
        console.log("successfully authenticated")
      } else {
        console.error('error')
      }
    })
  }

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

  return (
    <React.Fragment>
      <button onClick={requestPermission}></button>
      <h1>ALLOW AUTH</h1>
    </React.Fragment>
  );
}

export default Auth;