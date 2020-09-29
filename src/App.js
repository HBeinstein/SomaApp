import React from 'react';
import database from './firebase';

function writeUserData(userId, name, email) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
  });
}

function App() {


  console.log(database);
  // writeUserData('000', 'Hannah', 'meow@gmail.com');

  // let database = firebase.database();

  // var ref = database.ref('somawebapp');

  // ref.on('value', dataReceived, errData)

  // function dataReceived(data) {
  //   console.log(data);
  // }

  // function errData(err){
  //   console.log("err");
  //   console.log(error);
  // }

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
