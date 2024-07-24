import React, { useEffect } from 'react'
import './App.css';

import Navbar from './components/navbar'
import Header from './components/header'

function App() {
  return (
    <div className='body'>
      <Header/>
      <Navbar/>
    </div>
  );
}

export default App;