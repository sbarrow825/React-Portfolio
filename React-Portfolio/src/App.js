import React from 'react';
import AboutMe from "./components/AboutMe"
import Assignments from "./components/Assignments"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Projects />
      <Assignments />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
