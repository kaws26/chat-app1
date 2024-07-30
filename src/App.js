
import './App.css';
import React, { useState } from 'react';
import Chat from './Chat';
import Login from './Login';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      {!userName ? (
        <Login setUserName={setUserName} />
      ) : (
        <Chat userName={userName} />
      )}
    </div>
  );
}

export default App;
