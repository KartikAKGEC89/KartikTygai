import React from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Project from './components/project/Project'
import Skill from './components/skills/Skill'
import Experience from './components/experience/Experience'
import Connect from './components/connect/Connect'

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Project />
      <Skill />
      <Experience />
      <Connect />
    </div>
  )
}

export default App
