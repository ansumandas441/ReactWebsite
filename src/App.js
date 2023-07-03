import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ='/' />
        </Routes>
      </Router> 
    </Fragment>
  )
}

export default App;
