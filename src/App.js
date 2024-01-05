import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Banner from './components/Banner';
import Footer from './components/Footer';
import ContactForm from "./components/ContactForm/ContactForm";
import OfferBanner from './components/OfferBanner';
import Login from './components/Login';
import Register from './components/Register';
// import ContactHeader from "./components/ContactHeader/ContactHeader";
// import './App.css';


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current location/pathname

  // Check if the current location is one of the pages where you want to display the footer
  const showFooter = location.pathname === '/' || location.pathname === '/about'|| location.pathname==='/contact';

  return (
    <div className="App">
      {/* <OfferBanner/> */}
      <Navbar />
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      </Routes>
      {/* <Banner /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      {/* {showFooter && <Footer />} */}
    </div>
  );
}

export default App;
