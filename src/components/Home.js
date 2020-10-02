import React from 'react';
import database from '../firebase';

function Home() {
  //retrieve data once
  database
    .ref('/xAxis/')
    .once('value')
    .then(function(snapshot) {
    let username = snapshot.val();
    console.log(username);
  })

// stream data
  let xAxisVal = database.ref('xAxis/');
  xAxisVal.on('value', function(snapshot) {
  console.log(snapshot.val());
});

  return (
    <div className="App">
      <header className="App-header">
        <p>
          home 
        </p>
      </header>
    </div>
  );
}

export default Home;