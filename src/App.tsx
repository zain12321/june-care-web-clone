import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UserForm } from './components/UserForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Header name='Muhammad' store='zain' num={20}/>
<Home/>
<UserForm/> */}
<Welcome/>
      </div>
  );
}

export default App;
