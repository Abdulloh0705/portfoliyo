import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Section from './components/section/Section'
import Skills from './components/Skills/Skills'
import Project from './components/project/Project'
import Mail from './components/feedbakc/Mail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <>
      <div className="app__box">
        <Nav />
        <Header />
        <Section />
        <Skills/>
        <Project/>
        <Router>
            <Routes>
                <Route path="/" element={<Mail />} />
            </Routes>
        </Router>
      </div>
    
    </>
  )
}

export default App
