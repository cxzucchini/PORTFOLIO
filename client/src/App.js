import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { profile, skills, projects } = PORTFOLIO_DATA;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="portfolio-container">
      
      {/* ======== NAV ======== */}
      <nav>
        <div className="logo">jlt.dev</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <span className="icon-sun">☀️</span> : <span className="icon-moon">🌙</span>}
          </button>
        </div>
      </nav>

      {/* ======== HERO ======== */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-tag">Hey there! I'm</p>
            <h1>James Laurence <br />Talagon</h1>
            <p className="hero-sub">Frontend Developer &amp; IT Student at <strong>{profile.school}</strong></p>
            <p className="hero-desc">2nd year BSIT student who loves building clean, fast, and good-looking websites. Currently open to internships and freelance projects.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">See My Work</a>
              <a href="#contact" className="btn btn-ghost">Contact Me</a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img src="/me.jpg" alt="James Laurence Talagon" className="hero-img" />
          </div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section id="about">
        <p className="section-tag">// about me</p>
        <h2>Who I Am</h2>
        
        <div className="about-content-top">
          <p>I'm James, a <strong>{profile.year} student</strong> at <strong>{profile.school}.</strong> 
            I'm a developer who enjoys exploring how things are built and learn.</p>
          <p>I enjoy the process of turning an idea into something real and usable. I'm still learning every day, and I believe that building real projects is the best way to grow as a developer.</p>
          <p>When I'm not coding, I'm watching dev tutorials, exploring UI designs, or just enjoying life in Iloilo.</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-row">
              <span className="about-label">Name</span>
              <span className="about-value">{profile.name}</span>
            </div>
            <div className="about-row">
              <span className="about-label">School</span>
              <span className="about-value">{profile.school}</span>
            </div>
            <div className="about-row">
              <span className="about-label">Course</span>
              <span className="about-value">{profile.year}</span>
            </div>
            <div className="about-row">
              <span className="about-label">Location</span>
              <span className="about-value">{profile.location}</span>
            </div>
            <div className="about-row">
              <span className="about-label">Email</span>
              <span className="about-value">{profile.email}</span>
            </div>
            <div className="about-row">
              <span className="about-label">Status</span>
              <span className="about-value status-open">● {profile.status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SKILLS ======== */}
      <section id="skills">
        <p className="section-tag">// skills</p>
        <h2>My Toolkit</h2>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span className="skill-emoji">{group.emoji}</span>
                <span className="skill-title">{group.title}</span>
              </div>
              <div className="tags">
                {group.tags.map(tag => (
                  <span key={tag} className={`tag ${group.color || ''}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======== PROJECTS ======== */}
      <section id="projects">
        <p className="section-tag">// projects</p>
        <h2>Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.isEmpty ? 'project-empty' : ''}`}>
              <div className="project-top">
                <span className="project-num">{project.num}</span>
                {!project.isEmpty && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-live">Live ↗</a>
                )}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              {project.tags && (
                <div className="tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section id="contact">
        <p className="section-tag">// contact</p>
        <h2>Let's Connect</h2>
        <p className="contact-desc">I'm open to internship opportunities, freelance work, or just a good conversation about tech. Feel free to reach out!</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-btn">📧 Email Me</a>
          <a href="https://facebook.com/jamessage42" target="_blank" rel="noreferrer" className="contact-btn">🔵 Facebook</a>
          <a href="https://instagram.com/jayillt" target="_blank" rel="noreferrer" className="contact-btn">📸 Instagram</a>
          <a href="https://github.com/cxzucchini" target="_blank" rel="noreferrer" className="contact-btn">🐙 GitHub</a>
        </div>
        <p className="footer">Built by {profile.name} · 2026</p>
      </section>

    </div>
  );
}

export default App;