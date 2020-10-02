import React from 'react';
import database from '../firebase';

export default function Auth() {

  //FETCH PHONE DATA

  // const database = require('./firebase');

  // let transmittingData = false; 
  // let counter = 50;


  // document.getElementById("button").addEventListener("click", requestPermission);

  // function requestPermission(){
  //   DeviceOrientationEvent.requestPermission()
  //   .then(res => {
  //     if(res === "granted") {
  //       console.log("successfully authenticated")
  //     } else {
  //       console.log('oops')
  //     }
  //   })
  // }

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


  // ref.on('value', function(dataSnapshot) {
    
  // });



// INTERACTING WITH DB:

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
  return (
    <h1>ALLOW AUTH</h1>
  );
}

export default Auth;