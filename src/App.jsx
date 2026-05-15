import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import FloatingActions from './FloatingActions';

function AppContent() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < 10);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');

  return (
    <div className="app-wrapper">
      {/* 4-Corner Mesh Gradient Background */}
      <div className="bg-mesh"></div>
      
      {/* Premium Header - Hidden on Blog Pages */}
      {!isBlog && (
        <header id="header" style={{ transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)' }}>
          <nav className="container nav-bar">
            <div className="logo-container">
              <Link to="/">
                <img src="/logo.jpeg" alt="Cookscape Logo" className="brand-logo-img" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="nav-links desktop-only">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="/#about">About</a></li>
            </ul>

            <div className="nav-cta desktop-only">
              <a href="/#contact" className="btn-resources pulse-animation">Get Estimate</a>
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-toggle-wrapper">
              <button 
                className={`mobile-toggle-v2 ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className="line line-1"></div>
                <div className="line line-2"></div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay V2 */}
          <div className={`mobile-menu-v2 ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-mesh"></div>
            <div className="mobile-menu-content">
              <ul className="mobile-links-v2">
                <li style={{ transitionDelay: '0.1s' }}><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li style={{ transitionDelay: '0.2s' }}><a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
                <li style={{ transitionDelay: '0.3s' }}><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                <li style={{ transitionDelay: '0.4s' }}><a href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
                <li style={{ transitionDelay: '0.45s' }}><Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link></li>
                <li style={{ transitionDelay: '0.5s' }}><a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li className="mobile-cta-v2" style={{ transitionDelay: '0.6s' }}>
                  <a href="/#contact" className="btn-primary-v3" onClick={() => setIsMobileMenuOpen(false)}>Get Estimate</a>
                </li>
              </ul>
              
              <div className="mobile-menu-footer" style={{ transitionDelay: '0.7s' }}>
                <p>Ready to design your dream home?</p>
                <a href="tel:+919600005679" className="mobile-phone-v2">+91 96000 05679</a>
              </div>
            </div>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <FloatingActions />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
