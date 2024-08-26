import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-me">
      <h2>Get in Touch</h2>
      <p>Want to connect or discuss a project? Reach out to me at:</p>
      <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope" /> your_email@example.com
      </a>
      <p>Or find me on social media:</p>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/your_linkedin_username/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" /> Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" /> Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/your_facebook_username/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" /> Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;