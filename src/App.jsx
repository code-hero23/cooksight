import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './PremiumUI.css';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import FloatingActions from './FloatingActions';
import FestiveOfferModal from './components/FestiveOfferModal';

function AppContent() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top or specific anchor on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="app-wrapper">
      {/* 4-Corner Mesh Gradient Background */}
      <div className="bg-mesh"></div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio" element={<Gallery />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <FestiveOfferModal />
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
