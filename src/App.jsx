import React from 'react'
import Navbar from './components/Navbar.jsx';
import Inform from './components/Inform.jsx';
import Abb from './components/Abb.jsx';
import Work from './components/Work.jsx'; 
import Flat from './components/Flat.jsx';
import Boxs from './components/Boxs.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Inform />
      <Abb />
      <Work /> 
      <Flat/>
      <Boxs/>
      <Footer/>
    </div>
  )
}

export default App
