import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import the Navbar component
import './index.css';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Ocomm from './pages/Ocomm';
import Footer from './components/Footer';
import UnionCard from './pages/UnionCard';
import News from './pages/News';
function App() {
  return (
    <BrowserRouter> 
      <Navbar className='z-50'/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ocomm" element={<Ocomm />} />
          <Route path="/UnionCard" element={<UnionCard />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer className='z-50'/>
    </BrowserRouter>
  );
}

export default App;