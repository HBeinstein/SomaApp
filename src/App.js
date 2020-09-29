import React from 'react';
import database from './firebase';

function App() {
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
          This is my app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
