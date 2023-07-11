import React, { Fragment } from 'react';
import BlogPage from './components/BlogPage.jsx';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path ='/' element={<Navbar/>}/>
          <Route path='/blog' element={<BlogPage />} />
          <Route path ='/About' />
          <Route path ='/Resume' />
          <Route path ='/Events' />
          <Route path ='/Research' />
          <Route path ='/Play' />
        </Routes>
      </Router> 
    </Fragment>
  )
}

export default App;
