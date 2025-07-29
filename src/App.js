import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/projects/Work';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState("light_theme");

  return (
    <Router>
      <div className="app">
        <Header theme={theme} setTheme={setTheme}/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Work />} />
            <Route path="/qualification" element={<Qualification theme={theme} setTheme={setTheme} setModalOpen={setModalOpen} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer modalOpen={modalOpen} theme={theme}/>
      </div>
    </Router>
  );
};

export default App;