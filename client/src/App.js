import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import SentenceTag from './components/pages/SentenceTag';
import MatrixCalculator from './components/pages/MatrixCalculator';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about-me' exact Component={AboutMe}/>
          <Route path='/resume' exact Component={Resume}/>
          <Route path='/sentence-tagging' exact Component={SentenceTag}/>
          <Route path='/calculator' exact Component={MatrixCalculator}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
