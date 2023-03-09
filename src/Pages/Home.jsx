import React from 'react'
import '../Styles/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import { About } from '../Components/About'
import Experience from '../Components/Experience'
import Skills from '../Components/Skills'
import Qualification from '../Components/Qualification'
import Services from '../Components/Services'
import Portfolio from '../Components/Portfolio'
import { ContactMe } from '../Components/ContactMe'
import Testimonials from '../Components/Testimonials'
import Quote from '../Components/Quote'
import { useState } from 'react'
import Certificates from '../Components/Certificates'


const Home = () => {
  
  
  const [mode, setMode] = useState("dark")
  
  if(mode==="light"){
    document.body.classList.add("light-mode");
  }

  if(mode==="dark"){
    document.body.classList.remove("light-mode");
  }
    

  return (
    <>
        <Header setMode={setMode} mode={mode} />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Qualification />
        <Services />
        <Portfolio />
        <Quote />
        <Testimonials />
        <ContactMe />
        <Footer />
    </>
  )
}

export default Home