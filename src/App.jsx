import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import FloatingActions from './FloatingActions';

function AppContent() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
      
      {/* Premium Header - Hidden on Blog Pages & on Scroll Down */}
      {!isBlog && (
        <header id="header" style={{ transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)' }}>
          <nav className="container nav-bar">
            <div className="logo-container">
              <Link to="/">
                <img src="/logo.jpeg" alt="Cookscape Logo" className="brand-logo-img" />
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/#contact" className="btn-resources pulse-animation">Get Estimate</a>
            </div>
          </nav>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPost />} />
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
