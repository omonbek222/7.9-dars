import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; 
import Rooms from './components/Rooms.jsx';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services /> 
      <Rooms/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
