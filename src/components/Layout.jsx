import React from 'react';
import Footer from './Footer'; // Import your Footer component

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
