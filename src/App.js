import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactForm from "./components/ContactForm/ContactForm";
import OfferBanner from './components/OfferBanner';
import Login from './components/Login';
import Register from './components/Register';
import { ThemeProvider, useTheme } from './components/ThemeContext'; // Import the ThemeProvider and useTheme


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>

        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const themeContext = useTheme(); // Use the context
  const location = useLocation(); // Get the current location/pathname

  // Check if the current location is one of the pages where you want to display the footer
  const showFooter = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/contact';

  const themeStyles = {
    backgroundColor: themeContext.theme === 'light' ? '#ffffff' : '	#d59090', // Dark background for light theme
    // color: themeContext.theme === 'light' ? '#000000' : '#ffffff', // White text for light theme
  };
  return (
    <div className="App" style={themeStyles}>
      <Navbar />
      <Routes>
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      {/* {showFooter && <Footer />} */}
    </div>
  );
}

export default App;
