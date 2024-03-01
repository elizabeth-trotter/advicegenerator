import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from './Interfaces/Interface';
import getData from './DataServices/DataService';
import HomeComponent from './components/HomeComponent';

function App() {


  return (
    <div>
      <HomeComponent />
    </div>
  );
}

export default App;
