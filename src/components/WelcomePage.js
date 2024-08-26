import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section className="welcome-intro">
        <p>
          Hi, I'm <b>Kartik Upadhayay</b>, a passionate software Developer with a love for Technology. This is my portfolio, where I showcase my projects, skills, and experiences.
        </p>
      </section>
    </div>
  );
};

export default WelcomePage;