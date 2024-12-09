import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Section from './components/section/Section'
import Skills from './components/Skills/Skills'
import Project from './components/project/Project'
import Mail from './components/feedbakc/Mail'




const App = () => {
  return (
    <>
      <div className="app__box">
        <Nav />
        <Header />
        <Section />
        <Skills/>
        <Project/>
        <Mail/>
      </div>
    
    </>
  )
}

export default App
