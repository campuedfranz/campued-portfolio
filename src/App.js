import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Code from './pages/Code';
import LoadingPage from './pages/LoadingPage';




function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (

    <>
      {loading === false ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/code" element={<Code />} />
          </Routes>
        </Router>
      ) : (
        <LoadingPage />      
      )}
    </>
  );
}

export default App;
