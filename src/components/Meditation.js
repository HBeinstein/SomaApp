import React from 'react';
import database from '../firebase';

  // READ data from db, retrieves once
  database
    .ref('/zAxis/')
    .once('value')
    .then(function(snapshot) {
    let zAxis = snapshot.val();
    console.log(zAxis);
  })

// READ data from db, continuously updating
//   let xAxisVal = database.ref('xAxis/');
//   xAxisVal.on('value', function(snapshot) {
//   console.log(snapshot.val());
// });


function Meditation() {
return (
<h3>Mediation Page</h3>
);
}

export default Meditation;