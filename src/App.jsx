// src/App.jsx
import { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState();

  const [money, setMoney] = useState(100);
  return (
    <h1>Hello world!</h1>
  );
}

export default App

