import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import About from './components/About';
import WhatsAppWidget from './components/Whatsapp';
import Services from './components/Services';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppWidget />
      <Footer/>
    </Router>
  );
};

export default App;
