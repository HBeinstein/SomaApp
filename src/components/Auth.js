import React from 'react';
// import database from '../firebase';

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

  return (
    <React.Fragment>
      <button onClick={requestPermission}></button>
      <h1>ALLOW AUTH</h1>
    </React.Fragment>
  );
}

export default Auth;