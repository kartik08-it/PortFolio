import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  // State to keep track of the current component to display
  const [currentPage, setCurrentPage] = useState('welcome');

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Component to render based on the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="app-container">
      <Navbar onPageChange={handlePageChange} />
      <div className="content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
