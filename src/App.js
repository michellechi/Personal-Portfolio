import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/projects/Work';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Qualification />
      <Contact />
    </main>
    </>
  )
}

export default App;
