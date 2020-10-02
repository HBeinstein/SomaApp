import React from 'react';
import database from '../Firebase';

function Meditation() {

  const database = require('./firebase');

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
  database
    .ref('/zAxis/')
    .once('value')
    .then(function(snapshot) {
    let zAxis = snapshot.val();
    console.log(zAxis);
  })

// READ data from db, updates on change in value
//   let xAxisVal = database.ref('xAxis/');
//   xAxisVal.on('value', function(snapshot) {
//   console.log(snapshot.val());
// });



return (
<h3>Mediation Page</h3>
);
}

export default Meditation;