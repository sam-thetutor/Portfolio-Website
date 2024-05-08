import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from "./Components/Header"
import Search from './Components/Search'
import Footer from "./Components/Footer"
import IntroPost from "./Components/IntroPost"
import Blogs from "./Components/Blogs"
import { Route, Routes } from 'react-router-dom'
import Articles from './Pages/Articles'
import Projects from './Pages/Projects'

function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
