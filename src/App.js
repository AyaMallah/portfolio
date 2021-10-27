import React from 'react'

import './App.css';
import About from './About.js'
import Navigation from './Navigation';
import Projects from './Projects';
import Technologies from './Technologies';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Education from './Education'
import 'animate.css';

function App() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Header />
        <About />
        <Projects />
        <Technologies />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
