import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Words from './components/Words/Words';
function App() {
  return (
    <>
    <Navbar/>
    <Routes >
    <Route exact path="/" element={<Home/>} />

    </Routes>
    <Gallery/>
    <Words/>
    <Footer/>
    </>
  )
}

export default App