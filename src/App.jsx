// src/App.jsx
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Benefits from './components/Benefits'
import CourseFeatures from './components/CourseFeatures'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <CourseFeatures />
      <Testimonials />
      <Pricing />
      <CTAForm />
      <Footer />
    </>
  )
}

export default App
