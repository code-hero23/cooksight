import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/siteData';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  const isBlog = location.pathname.startsWith('/blog');

  if (isBlog) return null;

  return (
    <header id="header" style={{ transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)' }}>
      <nav className="container nav-bar">
        <div className="logo-container">
          <Link to="/">
            <img src="/logo.jpeg" alt="Cookscape Logo" className="brand-logo-img" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('/#') ? (
                <a href={link.path}>{link.name}</a>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
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
            {NAV_LINKS.map((link, idx) => (
              <li key={link.name} style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}>
                {link.path.startsWith('/#') ? (
                  <a href={link.path} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                ) : (
                  <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                )}
              </li>
            ))}
            <li className="mobile-cta-v2" style={{ transitionDelay: `${0.1 * (NAV_LINKS.length + 1)}s` }}>
              <a href="/#contact" className="btn-primary-v3" onClick={() => setIsMobileMenuOpen(false)}>Get Estimate</a>
            </li>
          </ul>
          
          <div className="mobile-menu-footer" style={{ transitionDelay: `${0.1 * (NAV_LINKS.length + 2)}s` }}>
            <p>Ready to design your dream home?</p>
            <a href="tel:+919600005679" className="mobile-phone-v2">+91 96000 05679</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
