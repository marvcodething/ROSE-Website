import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import the Navbar component
import './index.css';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter> 
      <Navbar className='z-50'/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;