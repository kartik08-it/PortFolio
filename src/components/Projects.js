import React from 'react';
import './Projects.css';
import image from '../images/image.png';
import blinkexam from '../images/blinkexam.png';

const Projects = () => {
    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>Projects</h1>
            </header>
            <section className="projects-grid">
                <div className="project-card">
                    <h2>Pioneer The Future Website</h2>
                    <img src={image} alt="Pioneer The Future Website Screenshot" />
                    <p>In this project, I designed and developed a static website using Elementor, a popular page builder plugin in WordPress. The goal was to create a visually appealing and informative website that showcases</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>BlinkExam Website</h2>
                    <img src={blinkexam} alt="BlinkExam Website Screenshot" />
                    <p> In this project, I designed and developed a visually stunning and informative website for BlinkExam using Bakery, a popular page builder plugin in WordPress. The goal was to create a static website that showcases the brand's identity and services in a clean and modern design.</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>BlinkExam Admin Panel</h2>
                    <img src={blinkexam} alt="BlinkExam Website Screenshot" />
                    <p> In this project, I designed and developed a visually stunning and informative website for BlinkExam using Bakery, a popular page builder plugin in WordPress. The goal was to create a static website that showcases the brand's identity and services in a clean and modern design.</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>BlinkExam SuperAdmin</h2>
                    <img src={blinkexam} alt="BlinkExam Website Screenshot" />
                    <p> In this project, I designed and developed a visually stunning and informative website for BlinkExam using Bakery, a popular page builder plugin in WordPress. The goal was to create a static website that showcases the brand's identity and services in a clean and modern design.</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>BlinkExam Proctor Panel</h2>
                    <img src={blinkexam} alt="BlinkExam Website Screenshot" />
                    <p> In this project, I designed and developed a visually stunning and informative website for BlinkExam using Bakery, a popular page builder plugin in WordPress. The goal was to create a static website that showcases the brand's identity and services in a clean and modern design.</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>Data-Magnum Proctoring</h2>
                    <img src={blinkexam} alt="BlinkExam Website Screenshot" />
                    <p> In this project, I designed and developed a visually stunning and informative website for BlinkExam using Bakery, a popular page builder plugin in WordPress. The goal was to create a static website that showcases the brand's identity and services in a clean and modern design.</p>
                    <div className="button-container">
                        <a href="https://www.thepioneerfuture.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
        
                {/* <div className="project-card">
          <h2>Project 3: [Project Name]</h2>
          <p>[Project Description]</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
          <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
        </div> */}

            </section>
        </div>
    );
};

export default Projects;