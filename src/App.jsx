import React, { useEffect, useState } from 'react';
import './App.css';
import { motion, useAnimationControls } from 'framer-motion';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="app-wrapper">
      {/* 4-Corner Mesh Gradient Background */}
      <div className="bg-mesh"></div>
      
      {/* Premium Header */}
      <header id="header">
        <nav className="container nav-bar">
          <div className="logo-container">
            <img src="/logo.jpeg" alt="Cookscape Logo" className="brand-logo-img" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">More</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#" className="btn-resources pulse-animation">Get Estimate</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          {/* Static Background Layer */}
          <div className="hero-layers">
            <div className="midground-text">
              {"COOKSCAPE".split("").map((char, index) => (
                <span 
                  key={index} 
                  style={{ 
                    display: "inline-block", 
                    transform: `translateY(${scrollY * (0.1 + index * 0.04)}px)`, /* More dramatic parallax */
                    transition: "transform 0.1s ease-out" 
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Foreground Content */}
          <div className="hero-foreground container">
            <div className="hero-left">
              <h1 className="hero-title">Design & Living<br /><span>That Feel Alive</span></h1>
              <p className="hero-description">We design interiors that feel like home.</p>
              <div className="hero-actions">
                <a href="#" className="btn-blue-pill">Our Projects <span className="arrow-circle">→</span></a>
                <a href="#" className="btn-outline-pill">Contact us</a>
              </div>
            </div>

            <div className="hero-center">
              <div 
                className="main-image-wrapper"
                style={{ 
                  transform: `translateY(${scrollY * 0.15}px) rotateX(${scrollY * 0.02}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img src="/hero-image.png" alt="Architectural Visualization" />
              </div>
            </div>

            <div className="hero-cards-row">
              {/* Active Users Pill */}
              <div className="active-users-pill reveal">
                <div className="user-avatars">
                  <img src="https://i.pravatar.cc/150?u=1" alt="U1" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="U2" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="U3" />
                </div>
                <span>Happy Clients <strong>+500</strong></span>
              </div>

              <div className="card glass-card">
                <div className="card-body">
                  <span className="card-tag gold-tag">PROMOTION</span>
                  <h2 className="card-heading promo-big">75% <span className="small-off">Off</span></h2>
                  <p className="card-paragraph">On Design Charges for a limited time.</p>
                </div>
                <span className="card-link-icon">↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title" style={{ marginBottom: '20px', textAlign: 'left' }}>Chennai’s Trusted Interior Transformation Experts</h2>
              <p className="about-description">
                As one of Chennai’s leading home interior brands with 25+ years of expertise, we specialize in creating unique, elegant, and functional living spaces. Our commitment to quality, transparency, and guaranteed service sets us apart from the rest.
              </p>
              <div style={{ marginTop: '30px' }}>
                <a href="#" className="btn-blue-pill" style={{ display: 'inline-flex', width: 'max-content' }}>Know More <span className="arrow-circle">→</span></a>
              </div>
            </div>
            <div className="about-visual">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about-blob-svg">
                <defs>
                  <clipPath id="blob-clip">
                    <path d="M39.7,-58C50.6,-46.8,57.8,-34,63.9,-19.7C70,-5.4,74.9,10.3,73.6,26.8C72.2,43.4,64.5,60.8,51.2,67.9C37.9,75.1,18.9,72,2.1,69.1C-14.8,66.2,-29.6,63.7,-42.2,56.3C-54.8,48.9,-65.2,36.7,-72.7,21.7C-80.1,6.7,-84.6,-11.1,-79.9,-26.1C-75.2,-41,-61.3,-53.1,-46.4,-63C-31.6,-72.9,-15.8,-80.6,-0.7,-79.7C14.5,-78.7,28.9,-69.2,39.7,-58Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                <foreignObject x="0" y="0" width="200" height="200" clipPath="url(#blob-clip)">
                  <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src="/about-video.mp4" type="video/mp4" />
                  </video>
                </foreignObject>
              </svg>
            </div>
          </div>
        </section>

        {/* Gallery Section - Refined UX Marquee */}
        <section className="gallery-section">
          <div className="container" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Design Gallery</h2>
          </div>
          
          <div className="marquee-wrapper">
            {/* Edge Masks */}
            <div className="marquee-mask left"></div>
            <div className="marquee-mask right"></div>
            
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, -1920] }} // Adjusted for image width + gap
              transition={{ 
                duration: 35, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[
                "BEDROOM (2).png", "BEDROOM (3).png", "BEDROOM.jpg", "BEDROOM.png", 
                "DINING.png", "FOYER.png", "KIDS ROOM.jpg", "KITCHEN (2).png", 
                "KITCHEN.png", "LIVING.png", "TV UNIT.png"
              ].map((img, index) => (
                <GalleryItem key={index} src={`/RENDER IMAGES/${img}`} title={img.replace(/\.[^/.]+$/, "")} />
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "BEDROOM (2).png", "BEDROOM (3).png", "BEDROOM.jpg", "BEDROOM.png", 
                "DINING.png", "FOYER.png", "KIDS ROOM.jpg", "KITCHEN (2).png", 
                "KITCHEN.png", "LIVING.png", "TV UNIT.png"
              ].map((img, index) => (
                <GalleryItem key={`dup-${index}`} src={`/RENDER IMAGES/${img}`} title={img.replace(/\.[^/.]+$/, "")} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section container">
          <div className="contact-box">
            <h2 className="section-title">Start Your Journey</h2>
            <p>Ready to transform your space? Get a free consultation today.</p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <textarea placeholder="Tell us about your project"></textarea>
              <button type="submit" className="btn-blue-pill">Send Message <span className="arrow-circle">→</span></button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function GalleryItem({ src, title }) {
  return (
    <motion.div 
      className="marquee-item"
      whileHover={{ 
        scale: 1.12, 
        zIndex: 50,
        filter: "brightness(1.1)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="glass-card-inner">
        <img src={src} alt={title} loading="lazy" />
        <div className="gallery-overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
