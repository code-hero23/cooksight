import React, { useEffect, useState } from 'react';
import './App.css';

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
          <div className="logo-text">
            <span className="brand-name">COOKSCAPE</span>
            <span className="brand-tagline">INTERIORS & BEYOND</span>
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
          {/* Decorative Blur Circle */}
          <div className="hero-blur-circle"></div>

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
                  <span className="card-tag"></span>
                  <h3 className="card-heading">Our Services</h3>
                  <p className="card-paragraph">Interior Design Thoughtfully designed interior services for modern living.</p>
                </div>
                <span className="card-link-icon">↗</span>
              </div>

              <div className="card solid-card-special">
                <div className="card-icon-area-orb">
                  <div className="blue-orb"></div>
                </div>
                <div className="card-body">
                  <h3 className="card-heading">Smart Home</h3>
                  <p className="card-paragraph">Personalized interiors crafted to match your lifestyle.</p>
                </div>
                <span className="card-link-icon">↗</span>
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

        {/* The Cookscape Advantage Section */}
        <section className="advantage-section container">
      
          <div className="advantage-grid">
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 600) * -0.05)}px)` }}
            >
              <div className="advantage-icon">🎨</div>
              <h3>15+ Variants</h3>
              <p>From minimalist modern to heritage classic, explore over 15 unique design languages tailored to your personality.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 600) * -0.1)}px)` }}
            >
              <div className="advantage-icon">🚚</div>
              <h3>45 Days Delivery</h3>
              <p>Our streamlined supply chain ensures your dream home is ready for move-in within 45 days, guaranteed.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 600) * -0.07)}px)` }}
            >
              <div className="advantage-icon">🛡️</div>
              <h3>10 Years Warranty</h3>
              <p>Enjoy peace of mind with our comprehensive 10-year Warranty & Guarantee covering all structural components.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 600) * -0.12)}px)` }}
            >
              <div className="advantage-icon">📋</div>
              <h3>Free PDI Check</h3>
              <p>A rigorous 100-point Pre-Delivery Inspection ensures every detail meets our uncompromising quality standards.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * -0.05)}px)` }}
            >
              <div className="advantage-icon">🏗️</div>
              <h3>No Middle Men</h3>
              <p>By eliminating intermediaries, we provide direct factory-to-home pricing without compromising on quality.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * -0.1)}px)` }}
            >
              <div className="advantage-icon">🛠️</div>
              <h3>5 Years Free Service</h3>
              <p>Our commitment continues long after installation with 5 years of complimentary maintenance and support.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * -0.07)}px)` }}
            >
              <div className="advantage-icon">🍳</div>
              <h3>15 Days Installation</h3>
              <p>Experience rapid transformation with our expert teams completing kitchen installations in just 15 working days.</p>
            </div>
            <div 
              className="advantage-card"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * -0.12)}px)` }}
            >
              <div className="advantage-icon">💰</div>
              <h3>No Hidden Charges</h3>
              <p>What you see is what you pay. Our transparent pricing model includes all taxes, delivery, and installation costs.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section container">
          <h2 className="section-title">Design Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Living Room" />
              <div className="gallery-overlay"><h3>Minimalist Luxury</h3></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" alt="Kitchen" />
              <div className="gallery-overlay"><h3>Smart Kitchens</h3></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" alt="Bedroom" />
              <div className="gallery-overlay"><h3>Heritage Bedrooms</h3></div>
            </div>
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

export default App;
