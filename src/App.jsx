import React from 'react'
import { Routes, Route } from "react-router-dom"
import Landing from './components/Landing'
import About from './components/About'
import Gallery from './components/Gallery'
import Articles from './components/Articles'
import Links from './components/Links'
import Services from './components/Services'
import Donate from './components/Donate'

const App = () => {

  return (
    <Routes>
      <Route path='/' index element={<Landing />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/links' element={<Links />} />
      <Route path='/services' element={<Services />} />
      <Route path='/donate' element={<Donate />} />
    </Routes>
  )
  
}

export default App
